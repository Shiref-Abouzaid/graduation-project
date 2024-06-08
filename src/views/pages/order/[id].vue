<template>
  <BaseBreadcrumb title="Preview" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-card>
    <v-card-title>
      <h4>{{ item.name }}</h4>
    </v-card-title>
    <v-divider></v-divider>

    <v-row class="ma-0">
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Customer Email:</div>
          <div class="ms-auto">{{ item.buyerEmail }}</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Order Date:</div>
          <div class="ms-auto">{{ item.orderDate.split('T')[0] }}</div>
        </div>
      </v-col>

      <v-divider></v-divider>
      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Status</div>
          <div class="ms-auto">{{ item.status }}</div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <div class="d-flex">
          <div class="text-primary font-weight-bold">Total Price</div>
          <div class="ms-auto">{{ item.totalPrice }}</div>
        </div>
      </v-col>
      <v-divider></v-divider>

      <v-col cols="12" sm="6" md="12">
        <h2>Items</h2>
        <v-card class="pa-3 my-5" v-for="i in item.orderItems">
          <div class="d-flex mb-2">
            <div class="text-primary font-weight-bold">Name:</div>
            <div>{{ i.productName }}</div>
          </div>
          <div class="d-flex mb-2">
            <div class="text-primary font-weight-bold">Price:</div>
            <div>{{ i.price }}</div>
          </div>
          <div class="d-flex mb-2" v-if="i.category">
            <div class="text-primary font-weight-bold">Category:</div>
            <div>{{ i.category }}</div>
          </div>
          <div  class="d-flex w-100">
            <div class="text-primary font-weight-bold">Picture</div>
            <router-link :to="`/products/${i.productId}`" target="_blank"  class="text-center w-100">
              <img :src="i.pictureURL" width="250" />
            </router-link>
          </div >

        </v-card>
      </v-col>
    </v-row>


    <v-divider class="d-md-block"></v-divider>

    <v-divider></v-divider>

  </v-card>

  <div class="d-flex mt-5">
    <v-btn color="info" size="large" to="/orders">
      <ArrowLeftOutlined /> Orders
    </v-btn>

  </div>

</template>

<script setup>
import { fetchWrapper } from "@/utils/helpers/fetch-wrapper";
import { ref, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";
import {
  ArrowLeftOutlined,

} from '@ant-design/icons-vue';
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

const route = useRoute();

const breadcrumbs = shallowRef([
  {
    title: "Orders",
    disabled: false,
    href: "/orders",
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
  orderDate: "T",
  pictureURL: "",

});

async function getSubagent() {
  await fetchWrapper.get(`/order/${route.params.id}`).then((res) => {
    item.value = res;
  });
}

onMounted(() => {
  getSubagent();

});
</script>

<style scoped>
.v-col-sm-6 {
  border-left: 1px solid #ccc;
}
</style>
