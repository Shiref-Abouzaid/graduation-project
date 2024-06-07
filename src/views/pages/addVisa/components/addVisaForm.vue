<template>
  <v-form @submit.prevent="submit" ref="formRef" class="mt-3">
    <v-row>
      <v-col cols="6" sm="4" class="py-1">
        <v-text-field
          v-model="formData.fullname"
          label="Full Name"
          :rules="[validationRules.required]"
        ></v-text-field>
      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-text-field
          v-model="formData.number_of_travellers"
          label="Number of travellers"
          type="number"
          :maxlength="3"
          :rules="[validationRules.required, validationRules.numberRange]"
        >
        </v-text-field>
      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-autocomplete
          :items="countries"
          item-title="name"
          item-value="id"
          label="Destination"
          v-model="formData.travel_destination_id"
          autocomplete
          :rules="[validationRules.required]"
        />
      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-select
          label="Type of Visa"
          :items="visaTypes"
          item-title="type"
          item-value="id"
          v-model="formData.visa_type_id"
          :rules="[validationRules.required]"
        />
      </v-col>

      <v-col sm="4" class="py-1">
        <div class="d-flex gap-2">
          <div class="country-code-container">
            <v-select
              v-model="formData.country_code"
              :items="countryCodes"
              :menu-props="{
                closeOnContentClick: true,
              }"
            >
              <template v-slot:append-inner>
                <img :src="selectedFlag(formData.country_code)" alt="flag" width="20" />
              </template>

              <template v-slot:item="{ item }">
                <v-list-item
                  class="d-flex flex-row"
                  @click="
                    //@ts-ignore
                    formData.country_code = item.props.title.dial_code
                  "
                >
                  <div class="d-flex gap-2">
                    <span>{{
                      //@ts-ignore
                      item.props.title.code
                    }}</span>
                    <img
                      :src="
                      //@ts-ignore
                      selectedFlag(item.props.title.dial_code)"
                      alt="flag"
                      width="20"
                    />
                    <span
                      >({{
                        //@ts-ignore
                        item.props.title.dial_code
                      }})</span
                    >
                  </div>
                </v-list-item>
              </template>
            </v-select>
          </div>
          <v-text-field
            :maxLength="15"
            v-model="formData.phone"
            placeholder="Phone"
            label="Phone Number"
            :rules="[validationRules.required]"
          />
        </div>

      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-text-field
          v-model="formData.email"
          type="email"
          placeholder="Email"
          label="Email"
          :rules="[validationRules.required, validationRules.email]"
        />
      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-text-field
          v-model="formData.driving_license_count"
          type="number"
          placeholder="Driving license count"
          label="Driving license count"
          :rules="[
            validationRules.required,
            validationRules.notGreaterThan(formData.number_of_travellers),
          ]"
        />
      </v-col>

      <v-col sm="4" class="py-1">
        <v-dialog
          ref="dialog"
          v-model="arrivalModel"
          :return-value.sync="arrival_date"
          persistent
          lazy
          full-width
          width="290px"
        >
          <!-- @ts-ignore -->

          <template v-slot:activator="{ isActive }">
            <v-text-field
              v-model="formData.arrival_date"
              label="Arrival Date"
              @click="arrivalModel = !arrivalModel"
              :rules="[validationRules.required]"
              readonly
              v-on="isActive"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="arrival_date"
            scrollable
            :min="minArrivalDate"
            :max="maxArrivalDate"
          >
            <template #actions>
              <v-btn flat color="primary" @click="arrivalModel = false">Cancel</v-btn>
              <v-btn flat color="primary" variant="elevated" @click="setArrivalDate"
                >OK</v-btn
              >
            </template>
          </v-date-picker>
        </v-dialog>
      </v-col>

      <v-col cols="6" sm="4" class="py-1">
        <v-dialog
          ref="dialog"
          v-model="departureModel"
          :return-value.sync="departure_date"
          persistent
          lazy
          full-width
          width="290px"
        >
          <template v-slot:activator="{ isActive }">
            <v-text-field
              v-model="formData.departure_date"
              label="Departure Date"
              @click="departureModel = !departureModel"
              :rules="[validationRules.required]"
              readonly
              v-on="isActive"
            ></v-text-field>
          </template>
          <v-date-picker v-model="departure_date" :min="minDepartureDate" scrollable>
            <template #actions>
              <v-btn flat color="primary" @click="departureModel = false">Cancel</v-btn>
              <v-btn flat color="primary" variant="elevated" @click="setDepartureDate"
                >OK</v-btn
              >
            </template>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-btn
      v-if="!editMode"
      :loading="isLoading"
      class="mt-2 ms-auto submit-btn"
      color="primary"
      type="submit"
      block
    >
      Submit
    </v-btn>
    <v-btn
      v-else
      :loading="isLoading"
      class="mt-2 ms-auto submit-btn"
      color="success"
      @click="editVisa"
      block
    >
      Edit
    </v-btn>
    <div class="d-flex">
      <v-alert
        class="mt-5"
        :color="alertColor"
        variant="tonal"
        v-if="responseMessage.message.length"
      >
        <div v-for="message in responseMessage.message">
          <small v-if="responseMessage.message.length > 1">-</small>
          {{ message }}
        </div>
      </v-alert>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { fetchWrapper } from "@/utils/helpers/fetch-wrapper";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Eg from '@/assets/icons/eg.svg';
import Kw from '@/assets/icons/kw.svg';
import Sa from '@/assets/icons/sa.svg';
const route = useRoute();
const countries = ref([]);
let initialFormData: any;
const visaTypes = ref([]);
const isLoading = ref(false);
const formRef: any = ref(null);
const today = new Date();
const minArrivalDate = today.toISOString().split("T")[0];
const departureModel = ref(false);
const arrivalModel = ref(false);
const departure_date = ref(new Date());
const arrival_date = ref(new Date());

const countryCodes = ref([
  {
    name: "Kuwait",
    dial_code: "965",
    code: "KW",
    flag: "kw.svg",
  },
  {
    name: "Egypt",
    dial_code: "20",
    code: "EG",
    flag: "eg.svg",
  },
  {
    name: "Saudi Arabia",
    dial_code: "966",
    code: "SA",
    flag: "sa.svg",
  },
]);

const formData: any = ref({
  number_of_travellers: "",
  phone: "",
  email: "",
  driving_license_count: "",
  departure_date: "",
  arrival_date: "",
  fullname: "",
  travel_destination_id: null,
  visa_type_id: null,
  country_code: "20",
});

const responseMessage = ref<{
  status: number;
  message: string[];
}>({
  status: 0,
  message: [],
});

const validationRules = {
  required: (value: any) => !!value || "This field is required.",
  email: (value: any) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  phoneNumber: (value: any) => {
    const pattern = /^\d{10,15}$/;
    return pattern.test(value) || "Phone number must be between 10 and 15 digits.";
  },
  numberRange: (value: any) => {
    const number = parseInt(value, 10);
    return (
      (!isNaN(number) && number >= 1 && number <= 999) ||
      "Number of travellers must be between 1 and 999."
    );
  },
  notGreaterThan: (refValue: any) => (value: any) => {
    const number = parseInt(value, 10);
    const referenceNumber = parseInt(refValue, 10);
    return (
      (!isNaN(number) && !isNaN(referenceNumber) && number <= referenceNumber) ||
      `This value must not be greater than ${refValue}.`
    );
  },
};

function selectedFlag(code:string) {
  if(code == '20') {
    return Eg
  } else if (code == '966') {
    return Sa
  } else if (code == '965') {
    return Kw
  } else {
    return Eg
  }
}



const minDepartureDate = computed(() => {
  if (arrival_date.value) {
    let arrivalDate = new Date(arrival_date.value);
    arrivalDate.setDate(arrivalDate.getDate() + 2);
    return arrivalDate.toISOString().split("T")[0];
  } else {
    return today.toISOString().split("T")[0];
  }
});

const maxArrivalDate = computed(() => {
  if (formData.value.departure_date) {
    let departureDate = new Date(departure_date.value);
    return departureDate.toISOString().split("T")[0];
  } else {
    return null;
  }
});


const editMode = computed(() => {
  return route.query.editMode ? true : false;
});

const alertColor = computed(() => {
  return responseMessage.value.status == 200 ? "success" : "error";
});

function resetData() {
  formData.value = {
    number_of_travellers: "",
    email: "",
    driving_license_count: "",
    departure_date: "",
    arrival_date: "",
    fullname: "",
    travel_destination_id: null,
    visa_type_id: null,
    phone: "",
    country_code: "20",
  };
  formRef.value.reset(); // Resets form fields to their initial values
  formRef.value.resetValidation(); // Clears all validation messages
}
function setArrivalDate() {
  arrivalModel.value = false;
  let day = arrival_date.value.getDate().toString().padStart(2, "0"); // Ensures the day is two digits
  let month = (arrival_date.value.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, add 1
  let year = arrival_date.value.getFullYear();

  formData.value.arrival_date = `${day}-${month}-${year}`;

  //next lines for switch to next month for (departure_date) if arrival date is lasd day in current month
  let arrivalDate = new Date(arrival_date.value);
  arrivalDate.setDate(arrivalDate.getDate() + 1);
  departure_date.value = new Date(arrivalDate);
}

function setDepartureDate() {
  departureModel.value = false;
  let day = departure_date.value.getDate().toString().padStart(2, "0"); // Ensures the day is two digits
  let month = (departure_date.value.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based, add 1
  let year = departure_date.value.getFullYear();

  formData.value.departure_date = `${day}-${month}-${year}`;
}

async function getCountries() {
  fetchWrapper
    .get("https://visatybs.techterminal.net/api/home/countries/getAllCountries")
    .then((res) => {
      countries.value = res.data;
    });
}

async function getVisaTyles() {
  fetchWrapper
    .get("https://visatybs.techterminal.net/api/home/visaTypes/getAllVisaTypes")
    .then((res) => {
      visaTypes.value = res.data;
    });
}

async function submit() {
  const validation = await formRef.value.validate();
  if (!validation.valid) return;

  responseMessage.value.message = []
  isLoading.value = true;
  fetchWrapper
    .post("/profile/store", formData.value)
    .then((res) => {
      isLoading.value = false;
      responseMessage.value.status = 200;
      responseMessage.value.message = [res.data.message];
      resetData();
    })
    .catch((err) => {
      isLoading.value = false;
      const errorMessages = Object.values(err.errors).flat();
      responseMessage.value.status = 400;
      responseMessage.value.message = errorMessages as string[];
    });
}

function getChangedData() {
  //get only changed data as string to send as query
  const changedData: any = {};
  const params = new URLSearchParams();
  Object.keys(formData.value).forEach((key) => {
    if (formData.value[key] !== initialFormData[key]) {
      changedData[key] = formData.value[key];
      params.append(key, changedData[key]);
    }
  });

  return params.toString();
}

async function editVisa() {
  const validation = await formRef.value.validate();
  if (!validation.valid) return;

  responseMessage.value.message = []
  isLoading.value = true;
  await fetchWrapper
    .put(`/profile/update/${route.query.id}?${getChangedData()}`)
    .then((res) => {
      isLoading.value = false;
      responseMessage.value.status = 200;
      responseMessage.value.message = [res.data.message];
    })
    .catch((err) => {
      isLoading.value = false;
      const errorMessages = Object.values(err.errors).flat();
      responseMessage.value.status = 400;
      responseMessage.value.message = errorMessages as string[];
    });
}

async function getVisaData() {
  await fetchWrapper.get(`/profile/preview/${route.query.id}`).then((res) => {
    formData.value = res.data.visa;
    arrival_date.value = new Date(reformateDate(res.data.visa.arrival_date));
    departure_date.value = new Date(reformateDate(res.data.visa.departure_date));

   
    formData.value.arrival_date = res.data.visa.arrival_date.split("T")[0];
    formData.value.departure_date = res.data.visa.departure_date.split("T")[0];
    if(res.data.visa.phone[0] == '2') {
      formData.value.country_code = res.data.visa.phone.substring(0, 2)
      formData.value.phone =res.data.visa.phone.substring(2)
    } else if(res.data.visa.phone[0] == '9') {
      formData.value.country_code = res.data.visa.phone.substring(0, 3)
      formData.value.phone =res.data.visa.phone.substring(3)
    }
    initialFormData = JSON.parse(JSON.stringify(formData.value)); // copy object to compare it later to send the edited properties to edit endpoint
  });
}

function reformateDate(str:string):any { // reformate date to change string from back end to set it ccorrectly in  Date object
  const dateString = str;
  const parts = dateString.split("-");
  const newFormat = `${parts[1]}-${parts[2]}-${parts[0]}`;
  return  newFormat
}


onMounted(() => {
  getCountries();
  getVisaTyles();
  // console.log(departure_date.value)
  // departure_date.value = new Date('2024-05-01')
  if (editMode.value) {
    getVisaData();
  }
});
</script>

<style scoped>
:deep(.submit-btn) {
  min-width: 150px !important;
  width: 150px !important;
  max-width: 150px !important;
}
.gap-2 {
  gap: 8px;
}
</style>
<style>
@media only screen and (max-width: 600px) {
  .v-dialog > .v-overlay__content {
    width: unset !important;
  }
}
</style>
