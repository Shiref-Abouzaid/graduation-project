<template>
  <v-app-bar elevation="0" height="60">
    <v-btn
      class="hidden-md-and-down text-secondary mr-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </v-btn>

    <!---/Search part -->

    <v-spacer />
  
    <v-menu :close-on-content-click="false" offset="8, 0">
      <template v-slot:activator="{ props }">
        <v-btn class="profileBtn" variant="text" rounded="sm" v-bind="props">
          <div class="d-flex align-center">
            <v-avatar class="mr-sm-2 mr-0 py-2">
              <img src="@/assets/images/users/avatar-1.png" alt="Julia" />
            </v-avatar>
            <h6 class="text-subtitle-1 mb-0 d-sm-block d-none">{{ userEmail }}</h6>
          </div>
        </v-btn>
      </template>
      <v-sheet rounded="md" width="290">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>




<script setup lang="ts">

import { useCustomizerStore } from '../../../stores/customizer';

import { MenuFoldOutlined } from '@ant-design/icons-vue';
import { useAuthStore } from '@/stores/auth';
import ProfileDD from './ProfileDD.vue';

const customizer = useCustomizerStore();

import {computed} from 'vue'




const { user, email } = useAuthStore();

const userEmail = computed(()=>{
  if(user.email) {
    return user.email
  } else {
    return email
  }
})
</script>