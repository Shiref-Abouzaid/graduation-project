<template>
  <div :key="mykey">
    <BaseBreadcrumb
      :title="editMode ? 'Edit Category' : 'Add Category'"
    
      :breadcrumbs="breadcrumbs"
   
    ></BaseBreadcrumb>
    <UiParentCard title="Category" bg="white" >
      <AddCategoryForm />
    </UiParentCard>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, watch } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import AddCategoryForm from "./components/AddCategoryForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const editMode = computed(() => {
  return route.query.editMode ? true : false;
});

const mykey = ref(1);
watch(route, async () => {
  mykey.value = Math.floor(Math.random() * 10) + 1;

});

const breadcrumbs = shallowRef([
  {
    title: "Categories",
    disabled: false,
    href: "/categories",
  },
  {
    title: editMode.value ? "Edit" : "Add",
    disabled: true,
    href: "#",
  },
]);
</script>./components/addCategoryForm.vue
