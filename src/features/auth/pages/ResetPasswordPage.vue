<script setup>
import { reactive, ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import lockIcon from "@/assets/icons/lock.svg";
import { clearError, validateResetPassword } from "../validators/authValidates.js";
import { ROUTES } from "@/constants/routes.js";
import { showPassword } from "../utils/showPassword.js";

const header = {
  title: "Set a new password",
  des: "Choose a strong password you haven't used before. It must be at least 8 characters.",
};
const forms = ref([
  {
    id: "newPassword",
    title: "New password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    id: "confirmNewPassword",
    title: "Confirm new password",
    type: "password",
    placeholder: "Re-enter your password",
  },
]);

const errors = ref({});

const formSubmit = reactive({ newPassword: "", confirmNewPassword: "" });

const handleSubmit = () => {
  const result = validateResetPassword(formSubmit);
  errors.value = result || {};
  if (!result) {
    alert("Updated password successful !");
  }
};

const handleShowPassword = (field) => {
  showPassword(forms.value, field);
};

const handleClearError = (field) => {
  clearError(errors.value, field);
};
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" :icon="lockIcon" />

    <AuthForm
      :forms="forms"
      submit="Update password"
      v-model="formSubmit"
      @submit="handleSubmit"
      @clear-error="handleClearError"
      @show-password="handleShowPassword"
      :errors="errors"
    >
    </AuthForm>

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
