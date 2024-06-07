<template>
  <div class="logo">
    <RouterLink to="/visas" aria-label="logo">
      <img src="@/assets/images/LogoGreen.webp" width="100"/>
    </RouterLink>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
</script>
