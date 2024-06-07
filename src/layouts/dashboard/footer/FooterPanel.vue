<script setup lang="ts">
import { shallowRef } from 'vue';

const footerLink = shallowRef([
  {
    title: 'About us',
    href:'https://visatyapp.com/en/about-us'
  },
  {
    title: 'Privacy',
    href:'https://visatyapp.com/en/privacy-policy'
  },
  {
    title: 'Terms',
    href:'https://visatyapp.com/en/privacy-policy'
  }
]);
</script>
<template>
  <v-footer class="px-0 footer">
    <v-row justify="center" no-gutters>
      <v-col cols="6">
        <p class="text-caption mb-0">© All rights reserved</p>
      </v-col>
      <v-col class="text-right" cols="6">
        <a v-for="(item, i) in footerLink" :key="i" class="mx-2 text-caption text-darkText" target="_blank" :href="item.href">
          {{ item.title }}
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>
