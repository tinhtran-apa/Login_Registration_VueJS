<script setup>
import { reactive, ref, watch } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import mailIcon from "@/assets/icons/mail.svg";
import { clearError, validateVerifyEmail } from "../validators/authValidates.js";
import { ROUTES } from "@/constants/routes.js";
import { OTP_LENGTH } from "@/constants/validation.js";

const header = {
  title: "Verify your email",
  des: `We sent a 6-digit code to your email. Enter it below to confirm your address.`,
};
const forms = ref([]);
const formSubmit = reactive({});

for (let index = 0; index < OTP_LENGTH; index++) {
  const id = `otp${index}`;
  forms.value[index] = {
    id,
    title: "",
    type: "number",
    placeholder: "",
    maxlength: 1,
    pattern: "[0-9]",
    inputmode: "numeric",
    isOtp: true,
  };
  formSubmit[id] = "";
}

const errors = ref({});

const handleSubmit = () => {
  const result = validateVerifyEmail(formSubmit, OTP_LENGTH);
  errors.value = result || {};
  if (!result) {
    alert("Email verified successfully !");
  }
};

const handleClearError = (field) => {
  clearError(errors.value, field);
};

watch(
  formSubmit,
  () => {
    for (let i = 0; i < OTP_LENGTH; i++) {
      const id = `otp${i}`;
      const value = formSubmit[id];
      const clean = String(value)
        .replace(/[^0-9]/g, "")
        .slice(0, 1);
      if (clean !== value) {
        formSubmit[id] = clean;
      }
    }
  },
  { deep: true },
);
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" :icon="mailIcon" />

    <AuthForm
      :forms="forms"
      v-model="formSubmit"
      @submit="handleSubmit"
      @clear-error="handleClearError"
      submit="Verify email"
      :errors="errors"
      :show-error-text="false"
    />
    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Didn't get it?</span>

      <button class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" to="">Resend Code</button>
    </div>
    <div class="flex justify-center items-center gap-[1.66px]">
      <RouterLink
        class="flex items-center justify-center gap-1.5 text-tertiary text-[16px] leading-6 tracking-normal font-semibold"
        :to="ROUTES.LOGIN"
      >
        <img :src="arrowLeft" alt="" />
        <span class="text-sm">Back to sign in</span>
      </RouterLink>
    </div>
  </RightPanel>
</template>
