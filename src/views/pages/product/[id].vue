<template>
      <BaseBreadcrumb
      title="Preview"
    
      :breadcrumbs="breadcrumbs"
   
    ></BaseBreadcrumb>
  <v-card>
    <v-card-title
      ><h4>{{ item.name }}</h4></v-card-title
    >
    <v-divider></v-divider>

    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Name:</div>
          <div class="ms-auto">{{ item.name }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold" >Description:</div>
          <div class="ms-auto">{{ item.description }}</div>
        </div>
      </v-col>

      <v-divider ></v-divider>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Category</div>
          <div class="ms-auto">{{ item.productCategory }}</div>
        </div>
      </v-col>
      <v-divider ></v-divider>

      <v-col cols="12" sm="6" md="12">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Picture</div>
          <div class="text-center w-100">
            <img :src="item.pictureURL" width="500"/>
          </div>
        </div>
      </v-col>
    </v-row>


    <v-divider class="d-md-block"></v-divider>

    <v-divider ></v-divider>

  </v-card>

  <div class="d-flex mt-5"> 
      <v-btn color="info" size="large" to="/products"> <ArrowLeftOutlined /> Products</v-btn>
      <v-btn color="success" size="large" class="ms-auto" :to="`/products/add?editMode=true&id=${route.params.id}`"> <FormOutlined /> Edit</v-btn>
    </div>

</template>

<script setup >
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
    title: "Products",
    disabled: false,
    href: "/products",
  },
  {
    title: "Preview",
    disabled: true,
    href: "#",
  },
]);


const item = ref({
  id: 0,
  name: 0,
  description: "",
  productCategory: "",
  pictureURL: "",

});

async function getSubagent() {
  await fetchWrapper.get(`/product/${route.params.id}`).then((res) => {
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
