<template>
  <div class="d-flex align-end">
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-btn class="mb-2" color="primary" size="large" to="/category/add">
      <PlusOutlined />
      Add Category</v-btn>
  </div>
  <UiParentCard title="Categories" bg="white">
    <v-table height="68vh" fixed-header elevation class="bg-white">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">id</th>
          <th class="text-left">Created at</th>

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
        <tr v-if="!isLoading" v-for="item in categories" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.id }}</td>


          <td>{{ item.createdAt}}</td>

          <td>
            <div class="actions-container d-flex">
              <v-btn color="info" icon title="view" :to="`/category/${item.id}`"
                ><EyeOutlined
              /></v-btn>
              <v-btn
                color="success"
                class="mx-2"
                icon
                title="edit"
                :to="`/category/add?editMode=true&id=${item.id}`"
                ><FormOutlined
              /></v-btn>
              <v-btn color="error" icon title="delete" @click="showDelete(item.id)"
                ><DeleteOutlined
              /></v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </UiParentCard>

  <v-dialog v-model="deleteModal" max-width="500">
    <v-card title="Delete Category">
      <v-card-text> Are you sure you want to delete this Category? </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Cancel" @click="deleteModal = false" variant="elevated" color="info">
        </v-btn>
        <v-btn
          text="Delete"
          color="error"
          variant="elevated"
          @click="deleteCategory"
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
const page = ref({ title: "Categories" });
const deleteModal = ref(false);
const deleteLoading = ref(false);
const breadcrumbs = shallowRef([
  {
    title: "Categories",
    disabled: true,
    href: "#",
  },
  {
    title: "All",
    disabled: true,
    href: "#",
  },
]);

const categories = ref<Visa[]>([{
  name:'Electronics',
  id:1,
  createdAt:'2024-06-07T18:39:09.298902Z'
}]);

function showDelete(id: number) {
  deleteModal.value = true;
  idToDelete.value = id;
}

function deleteCategory() {
  deleteLoading.value = true;
  fetchWrapper.delete(`/ProductCategory/${idToDelete.value}`).then(() => {
    deleteLoading.value = false;
    deleteModal.value = false;
    categories.value = categories.value.filter((item) => {
      return item.id != idToDelete.value;
    });
  });
}

async function getCategories() {
  isLoading.value = true;
  fetchWrapper
    .get("/ProductCategory")
    .then((res) => {
      categories.value = res;
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
}

onMounted(() => {
  getCategories();
});
</script>
<style scoped>
td {
  border-color: #ccc !important;
}
</style>
