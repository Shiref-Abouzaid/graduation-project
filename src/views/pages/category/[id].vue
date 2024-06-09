<template>
      <BaseBreadcrumb
      title="Preview"
    
      :breadcrumbs="breadcrumbs"
   
    ></BaseBreadcrumb>
  <v-card>

    <v-divider></v-divider>

    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Name:</div>
          <div class="ms-auto">{{ item.name }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Created At:</div>
          <div class="ms-auto">{{ item.createdAt.split("T")[0] }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">ID:</div>
          <div class="ms-auto">{{ item.id }}</div>
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
    title: "Category",
    disabled: false,
    href: "/categories",
  },
  {
    title: "Preview",
    disabled: true,
    href: "#",
  },
]);


const item = ref({
  name:'',
  createdAt:'',
  id:''
})

async function getSubagent() {
  await fetchWrapper.get(`/ProductCategory/${route.params.id}`).then((res) => {
    item.value = res;
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
