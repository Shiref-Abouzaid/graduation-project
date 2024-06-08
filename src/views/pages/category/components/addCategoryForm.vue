<template>
  <v-form @submit.prevent="submit" ref="formRef" class="mt-3">
    <v-row>
      <v-col cols="6" sm="12" class="py-1">
        <v-text-field
          v-model="formData.name"
          label="Category Name"
          :rules="[validationRules.required]"
        ></v-text-field>
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
const isLoading = ref(false);
const formRef: any = ref(null);
const formData: any = ref({
  name: "",

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
};






const editMode = computed(() => {
  return route.query.editMode ? true : false;
});

const alertColor = computed(() => {
  return responseMessage.value.status == 200 ? "success" : "error";
});

function resetData() {
  formData.value = {
    name: "",

  };
  formRef.value.reset(); // Resets form fields to their initial values
  formRef.value.resetValidation(); // Clears all validation messages
}



async function submit() {
  const validation = await formRef.value.validate();
  if (!validation.valid) return;

  responseMessage.value.message = []
  isLoading.value = true;
  fetchWrapper
    .post("/ProductCategory", formData.value)
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
    .put(`/ProductCategory/${route.query.id}?${getChangedData()}`)
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

async function getCategoryData() {
  
  await fetchWrapper.get(`/ProductCategory/${route.query.id}`).then((res) => {
    formData.value = res.data.visa;

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

  // console.log(departure_date.value)
  // departure_date.value = new Date('2024-05-01')
  if (editMode.value) {
    getCategoryData();
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
