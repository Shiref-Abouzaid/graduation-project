<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Login</h3>
    <router-link to="/auth/register" class="text-primary text-decoration-none">Don't Have an account?</router-link>
  </div>
  <v-form @submit.prevent="validate" v-model="valid"  class="mt-7 loginForm" >
    <div class="mb-6">
      <v-label>Email Address</v-label>
      <v-text-field
        aria-label="email address"
        v-model="email"
        :rules="emailRules"
        class="mt-2"
        required
        type="email"
        hide-details="auto"
        variant="outlined"
        color="primary"
        placeholder="Email Address"
        autocomplete
      ></v-text-field>
    </div>
    <div>
      <v-label>Password</v-label>
      <v-text-field
        aria-label="password"
        v-model="password"
        :rules="passwordRules"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="show1 ? 'text' : 'password'"
        class="pwdInput mt-2"
        placeholder="Password"
      >
        <template v-slot:append>
          <v-btn color="secondary" icon rounded variant="text">
            <EyeInvisibleOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == false" @click="show1 = !show1" />
            <EyeOutlined :style="{ color: 'rgb(var(--v-theme-secondary))' }" v-if="show1 == true" @click="show1 = !show1" />
          </v-btn>
        </template>
      </v-text-field>
    </div>

    <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
      <v-checkbox
        v-model="checkbox"
  
        label="Keep me sign in"
        required
        color="primary"
        class="ms-n2"
        hide-details
      ></v-checkbox>
      <div class="ml-auto">
        <router-link to="/auth/forgot-password" class="text-darkText link-hover">Forgot Password?</router-link>
      </div>
    </div>
    <v-btn :loading="isLoading" color="primary" block class="mt-5" variant="flat" size="large" type="submit">
      Login</v-btn
    >
    <div v-if="responseMessage.message" class="mt-2">
      <v-alert color="error">
        {{ responseMessage.message }}
      </v-alert>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// icons
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { useAuthStore } from '@/stores/auth';

const responseMessage:any = ref({
  message:''
})
const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const isLoading = ref(false);
const password = ref('');
const email = ref('');
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 100) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

/* eslint-disable @typescript-eslint/no-explicit-any */
async function validate() {
  if(!valid.value) return;
  isLoading.value = true;
  responseMessage.value.message = false ;
  const authStore = useAuthStore();
  return authStore.login(email.value, password.value).then(()=>isLoading.value = false).catch((error) => {
    isLoading.value = false;

    
    responseMessage.value.message = error.message
  
  });
}


</script>


<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
