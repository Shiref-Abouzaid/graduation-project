<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0" v-if="currentStep == step.email">Forgot Password</h3>
    <h3 class="text-h3 text-center mb-0" v-if="currentStep == step.otb">Enter Verification Code</h3>
    <h3 class="text-h3 text-center mb-0" v-if="currentStep == step.password">Reset Password</h3>
    <h3 class="text-h3 text-center mb-0" v-if="currentStep == step.success">Password Changed!</h3>
    
  </div>
  <v-form
    ref="Regform"
    lazy-validation
    action="/dashboards/analytical"
    class="mt-7 loginForm"
    @submit.prevent="submit"
    v-show="currentStep == step.email"
  >
    <div>
      <v-label>Email Address*</v-label>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        placeholder="demo@company.com"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        type="email"
        color="primary"
        :disabled="responseMessage.status == 200"
      ></v-text-field>
      <v-alert :color="messageColor" class="mt-2" v-if="responseMessage.message">
        {{ responseMessage.message }}
      </v-alert>
    </div>

    <v-btn
      :loading="isLoading"
      color="primary"
      block
      class="mt-4"
      variant="flat"
      size="large"
      type="submit"
      v-if="responseMessage.status != 200"
      >Send OTB</v-btn
    >
  </v-form>

  <v-form v-if="currentStep == step.otb"  @submit.prevent="reciveOtb" >
    <v-otp-input  length="5" :min-width="400" v-model="otb" :error="otbError" ref="otbRef" />
    <v-alert :color="messageColor" class="mb-2" v-if="responseMessage.message ">
        {{ responseMessage.message }}
      </v-alert>
    <v-btn size="large" color="primary" block type="submit" :loading="otbLoading"
      >Recive OTB</v-btn
    >
    <v-btn
      size="large"
      color="primary"
      class="mt-4"
      variant="outlined"
      block
      :disabled="time != 0"
      :loading="isLoading"
      @click="submit"
    >
      Resend Code <span v-if="time != 0">in {{ timeDisplay }}</span>
    </v-btn>
  </v-form>


  <v-form v-if="currentStep == step.password" @submit.prevent="resetPassword" v-model="passwordValid" class="mt-5">
    <v-label>Password</v-label>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        placeholder="Password"
        class="mt-2"
        required
        ref="passwordRef"
        hide-details="auto"
        variant="outlined"
        color="primary"
        type="password"
       
      ></v-text-field>

    <v-label class="mt-4">Confirm Password</v-label>
      <v-text-field
        v-model="confirmPassword"
        :rules="confirmPasswordRules"
        placeholder="Password"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
        type="password"
       
      ></v-text-field>

      <v-btn
      size="large"
      color="primary"
      class="mt-4"
      block
      type="submit"
      :loading="isLoading"
      >Reset Password</v-btn>
  </v-form>

  <div v-if="currentStep == step.success">
    <v-alert :color="messageColor" variant="flat" class="mt-2" v-if="responseMessage.message">
        {{ responseMessage.message }}, you can <RouterLink to="/auth/login" class="text-white">Login</RouterLink> Now!
      </v-alert>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { fetchWrapper } from "@/utils/helpers/fetch-wrapper";

enum step {
  email = 1,
  otb = 2,
  password = 3,
  success = 4
}

const email = ref("");
const Regform = ref();
const isLoading = ref(false);
const time = ref(60); // 60 seconds for 1 minute
const timeDisplay = ref("01:00");
const otb = ref("");
const otbError = ref(false);
const otbLoading = ref(false);
const otbRef:any  = ref(null);
const passwordRef:any = ref(null)
const password = ref('');
const confirmPassword = ref('');
const currentStep = ref(step.email);
const passwordValid = ref(false);
const responseMessage = ref({
  status: 0,
  message: "",
});

function otbFoucuse() {
  otbRef.value.focus();
  otbError.value = false;
}


const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

const passwordRules = ref([
  (v: string) => !!v || "Password is required",
]);

const confirmPasswordRules = ref([
  (v: string) => !!v || "Confirm password is required",
  // Rule to check if the password and confirm password match
  (v: string) => v === password.value || "Passwords do not match",
]);

const messageColor = computed(() => {
  return responseMessage.value.status == 200 ? "success" : "error";
});




function startCountdown() {
  timeDisplay.value = "01:00";
  time.value = 60;
  const interval = setInterval(() => {
    if (time.value > 0) {
      time.value--;
      // Update time display
      const minutes = Math.floor(time.value / 60);
      const seconds = time.value % 60;
      timeDisplay.value = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      clearInterval(interval); // Stop the countdown when it reaches 0
    }
  }, 1000);
}

async function reciveOtb() {
  if (otb.value.length < 5) {
    otbError.value = true;
    return;
  }
  otbLoading.value = true;

  fetchWrapper.post('/auth/receiveOTP', {
    email:email.value,
    code:otb.value
  }).then(async ()=>{
    otbLoading.value = false;
    currentStep.value = step.password;
    await nextTick();
    passwordRef.value.focus();
  }).catch(error=>{
      otbLoading.value = false;
      responseMessage.value.status = 400;
      responseMessage.value.message = error.error;
      otb.value = '';
      otbError.value = true;
  })

}

async function submit() {
  Regform.value.validate();
  if (!Regform.value.isValid) return;
  responseMessage.value.message = "";
  isLoading.value = true;

  fetchWrapper
    .post("/auth/forgetPassword", { email: email.value })
    .then(async () => {
      isLoading.value = false;
      currentStep.value = step.otb;
      startCountdown();
      await nextTick();
      otbFoucuse();

    })
    .catch((error) => {
      isLoading.value = false;
      responseMessage.value.status = 400;
      responseMessage.value.message = error.error;
    });
}


async function resetPassword() {

  if(!passwordValid.value) return;
  isLoading.value = true;

  fetchWrapper.post('/auth/resetPassword', {
    email: email.value,
    password:password.value
  }).then((res)=>{
    isLoading.value = false
    responseMessage.value.status = 200;
    responseMessage.value.message = res.data.message;
    currentStep.value = step.success

  }).catch((err)=>{
    isLoading.value = false;
    responseMessage.value.status = 400;
    responseMessage.value.message = err.data.message;
  })
} 
</script>
