<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>
    <router-link to="/auth/login" class="text-primary text-decoration-none">Already have an account?</router-link>
  </div>
  <v-form ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm" @submit.prevent="submit">
    <div class="mb-6">
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="demo@company.com"
        class="mt-2"
        required
        type="email"
        hide-details="auto"
        variant="outlined"
        color="primary"
        :disabled="responseMessage.status == 200"
      ></v-text-field>
      <v-alert :color="messageColor" class="mt-2" v-if="responseMessage.message">
        {{responseMessage.message}}
        <span v-if="responseMessage.status == 200">
        Check your inbox to revice your password and 
        <RouterLink to="/auth/login" aria-label="logo" class="text-white">Login</RouterLink>
         now</span>
        
      </v-alert>
    </div>
   

    <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold" v-if="responseMessage.status != 200">
      <h6 class="text-caption">
        By Signing up, you agree to our
        <router-link to="/auth/register" class="text-primary link-hover font-weight-medium">Terms of Service </router-link>
        and
        <router-link to="/auth/register" class="text-primary link-hover font-weight-medium">Privacy Policy</router-link>
      </h6>
    </div>
    <v-btn :loading="isLoading" color="primary" block class="mt-4" variant="flat" size="large" type="submit" v-if="responseMessage.status != 200">Create Account</v-btn>
  </v-form>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
const email = ref('');
const Regform = ref();
const isLoading = ref(false);
const responseMessage = ref({
  status:0,
  message:''
})
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

const messageColor = computed(()=>{
 return responseMessage.value.status == 200 ? 'success' : 'error'
})

async function submit() {
  Regform.value.validate();
  if(!Regform.value.isValid) return;
  responseMessage.value.message = '';
  isLoading.value = true;

  fetchWrapper.post('/auth/register', {email: email.value})
  .then(async data=>{
    isLoading.value = false;
    responseMessage.value.status = 200;
    responseMessage.value.message =  data.data.message

  }).catch(error=>{
    isLoading.value = false;
    responseMessage.value.status = 400;
    responseMessage.value.message =  error.errors.email[0]
  })

}

</script>
