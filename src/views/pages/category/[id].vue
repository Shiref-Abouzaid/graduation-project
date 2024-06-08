<template>
      <BaseBreadcrumb
      title="Preview"
    
      :breadcrumbs="breadcrumbs"
   
    ></BaseBreadcrumb>
  <v-card>
    <v-card-title
      ><h4>{{ subagent.fullname }}</h4></v-card-title
    >
    <v-divider></v-divider>

    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Full Name:</div>
          <div class="ms-auto">{{ subagent.fullname }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold" >Phone:</div>
          <div class="ms-auto">{{ subagent.phone }}</div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Driving License Count</div>
          <div class="ms-auto">{{ subagent.driving_license_count }}</div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Departure Date:</div>
          <div class="ms-auto">{{ subagent.departure_date.split("T")[0] }}</div>
        </div>
      </v-col>
    </v-row>

    <v-divider class="d-md-block"></v-divider>

    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Arrival Date:</div>
          <div class="ms-auto">{{ subagent.arrival_date.split("T")[0] }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Travel Destination:</div>
          <div class="ms-auto">{{ subagent.travel_destination }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Visa Type:</div>
          <div class="ms-auto">{{ subagent.visa_type }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Number of Travellers:</div>
          <div class="ms-auto">{{ subagent.number_of_travellers }}</div>
        </div>
      </v-col>
      <v-divider class="d-md-block"></v-divider>
 
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Email:</div>
          <div class="ms-auto">{{ subagent.email }}</div>
        </div>
      </v-col>
    </v-row>

    <v-divider ></v-divider>

  </v-card>

  <div class="d-flex mt-5"> 
      <v-btn color="info" size="large" to="/categories"> <ArrowLeftOutlined /> Categories</v-btn>
      <v-btn color="success" size="large" class="ms-auto" :to="`/category/add?editMode=true&id=${route.params.id}`"> <FormOutlined /> Edit</v-btn>
    </div>
</template>

<script setup lang="ts">
import { fetchWrapper } from "@/utils/helpers/fetch-wrapper";
import { ref, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";
import {
  ArrowLeftOutlined,
  FormOutlined
} from '@ant-design/icons-vue';
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

const route = useRoute();

const breadcrumbs = shallowRef([
  {
    title: "Visas",
    disabled: false,
    href: "/visas",
  },
  {
    title: "Preview",
    disabled: true,
    href: "#",
  },
]);

type SubagentType = {
  id: number;
  user_id: number;
  travel_destination: string;
  visa_type: string;
  departure_date: string;
  arrival_date: string;
  number_of_travellers: number | null;
  driving_license_count: number | null;
  email: string;
  phone: string;
  fullname: string;
  created_at: string;
  updated_at: string;
};
const subagent = ref<SubagentType>({
  id: 0,
  user_id: 0,
  travel_destination: "",
  visa_type: "",
  departure_date: "",
  arrival_date: "",
  number_of_travellers: null,
  driving_license_count: null,
  email: "",
  phone: "",
  fullname: "",
  created_at: "",
  updated_at: "",
});

async function getSubagent() {
  await fetchWrapper.get(`/profile/preview/${route.params.id}`).then((res) => {
    subagent.value = res.data.visa;
  });
}

onMounted(() => {
  getSubagent();

});
</script>

<style scoped>
.v-col-sm-6{
  border-left: 1px solid #ccc;
}
</style>
