<script setup lang="ts">

// icons
import {
  LogoutOutlined,
} from '@ant-design/icons-vue';

import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore();
</script>

<template>

  <div>
    <div class="d-flex align-center pa-5">
      <v-avatar size="32" class="mr-2">
        <img src="@/assets/images/users/avatar-1.png" width="32" alt="Julia" />
      </v-avatar>
      <div>
        <h6 class="text-h6 mb-0">User</h6>
        <!-- <p class="text-caption mb-0">UI/UX Designer</p> -->
      </div>
      <div class="ml-auto">
        <v-btn variant="text" color="primary" rounded="sm" icon size="large" @click="authStore.logout()">
          <LogoutOutlined :style="{ fontSize: '20px' }" />
        </v-btn>
      </div>
    </div>
<hr>
    <perfect-scrollbar >
      <v-list class="py-0" aria-label="profile list" aria-busy="true">
            <v-list-item @click="authStore.logout()" color="secondary" rounded="0">
              <template v-slot:prepend>
                <LogoutOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
            </v-list-item>
          </v-list>
    </perfect-scrollbar>
  </div>
</template>
