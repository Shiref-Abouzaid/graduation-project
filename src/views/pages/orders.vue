<template>
    <div class="d-flex align-end">
      <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    </div>
    <UiParentCard title="Orders" bg="white">
      <v-table height="68vh" fixed-header elevation class="bg-white">
        <thead>
          <tr>
            <th class="text-left">Customer Email</th>
            <th class="text-left">Items</th>
            <th class="text-left">Price</th>
            <th class="text-left">Created at</th>
            <th class="text-left">Status</th>
            
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading">
            <td colspan="6" class="text-center py-2">
              <v-progress-circular
                color="primary"
                indeterminate
                size="100"
              ></v-progress-circular>
            </td>
          </tr>
          <tr v-if="!isLoading" v-for="item in items" :key="item.id">
            <td>{{ item.buyerEmail }}</td>
            <td>
                <div v-for="i in item.orderItems">-{{ i.productName }}</div>
            </td>
  
  
            
            <td>{{ item.totalPrice}}</td>
            <td>{{ item.orderDate.split('T')[0]}}</td>
            <td>{{ item.status }}</td>
            <td>
              <div class="actions-container d-flex">
                <v-btn class="me-2" size="small" color="info" icon title="view" :to="`/order/${item.id}`"
                  ><EyeOutlined
                /></v-btn>

                <v-btn color="error"  title="delete" @click="showDelete(item.id)"
                  >Cancel</v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </UiParentCard>
  
    <v-dialog v-model="deleteModal" max-width="500">
      <v-card title="Delete Product">
        <v-card-text> Are you sure you want to Cancel this Order? </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Cancel" @click="deleteModal = false" variant="elevated" color="info">
          </v-btn>
          <v-btn
            text="Delete"
            color="error"
            variant="elevated"
            @click="deleteProduct"
            :loading="deleteLoading"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup lang="ts">
  import { fetchWrapper } from "@/utils/helpers/fetch-wrapper";
  
  import { DeleteOutlined, FormOutlined, EyeOutlined, PlusOutlined} from "@ant-design/icons-vue";
  
  import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
  import { ref, shallowRef, onMounted } from "vue";
  
  type Visa = {
    id: number;
    name: string;
    createdAt: string;
  
  };
  
  const isLoading = ref(false);
  const idToDelete = ref();
  const page = ref({ title: "Products" });
  const deleteModal = ref(false);
  const deleteLoading = ref(false);
  const breadcrumbs = shallowRef([
    {
      title: "Products",
      disabled: true,
      href: "#",
    },
    {
      title: "All",
      disabled: true,
      href: "#",
    },
  ]);
  
  const items = ref([{
    buyerEmail:'Electronics',
    id:1,
    orderDate:'2024-06-07T18:39:09.298902Z',
    totalPrice:1,
    status:'pending',
    orderItems:[{
        "productName":"phone"
    }]
  }]);
  
  function showDelete(id: number) {
    deleteModal.value = true;
    idToDelete.value = id;
  }
  
  function deleteProduct() {
    deleteLoading.value = true;
    fetchWrapper.delete(`/Order/${idToDelete.value}`).then(() => {
      deleteLoading.value = false;
      deleteModal.value = false;
      items.value = items.value.filter((item) => {
        return item.id != idToDelete.value;
      });
    });
  }
  
  async function getOrders() {
    isLoading.value = true;
    fetchWrapper
      .get("/Order?PageSize=1000")
      .then((res) => {
        items.value = res.data;
        isLoading.value = false;
      })
      .catch(() => {
        isLoading.value = false;
      });
  }
  
  onMounted(() => {
    getOrders();
  });
  </script>
  <style scoped>
  td {
    border-color: #ccc !important;
  }
  </style>
  