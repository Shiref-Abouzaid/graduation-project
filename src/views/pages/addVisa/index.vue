<template>
  <div :key="mykey">
    <BaseBreadcrumb
      :title="editMode ? 'Edit Visa' : 'Add Visa'"
    
      :breadcrumbs="breadcrumbs"
   
    ></BaseBreadcrumb>
    <UiParentCard title="Visa" bg="white" >
      <AddVisaForm />
    </UiParentCard>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, watch } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import AddVisaForm from "./components/addVisaForm.vue";
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
    title: "Visas",
    disabled: false,
    href: "/visas",
  },
  {
    title: editMode.value ? "Edit" : "Add",
    disabled: true,
    href: "#",
  },
]);
</script>
