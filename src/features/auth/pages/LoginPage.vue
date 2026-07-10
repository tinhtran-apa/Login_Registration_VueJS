<script setup>
import { reactive, ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import AuthHeader from "../components/AuthHeader.vue";
import { RouterLink } from "vue-router";
import CheckBox from "@/components/common/checkbox.vue";
import { clearError, validateLogin } from "../validators/authValidates.js";
import { showPassword } from "../utils/showPassword.js";
import { ROUTES } from "@/constants/routes.js";
import googleIcon from "@/assets/icons/google.svg"
import githubIcon from "@/assets/icons/github.svg"
const header = {
  title: "Welcome Back",
  des: "Sign in to continue to your workspace",
};

const forms = ref([
  {
    id: "email",
    title: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
]);

const socials = [
  {
    title: "Continue with Google",
    icon: googleIcon,
  },
  {
    title: "Continue with Github",
    icon: githubIcon,
  },
];

const errors = ref({});

const formSubmit = reactive({ email: "", password: "" });

const handleSubmit = () => {
  const result = validateLogin(formSubmit);
  errors.value = result || {};
  if (!result) {
    alert("Login successful !");
  }
};

const handleClearError = (field) => {
  clearError(errors.value, field);
};

const handleShowPassword = (field) => {
  showPassword(forms.value, field);
};
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :socials="socials" :header="header"
      >or sign in with email</AuthHeader
    >

    <AuthForm
      :forms="forms"
      v-model="formSubmit"
      @submit="handleSubmit"
      @clear-error="handleClearError"
      @show-password="handleShowPassword"
      submit="Sign In"
      :errors="errors"
    >
      <div class="text-secondary text-sm leading-5 font-semibold flex gap-[10px]">
        <CheckBox />

        <span class="text-secondary tracking-normal">Remember me</span>
      </div>

      <RouterLink :to="ROUTES.FORGOT_PASSWORD" class="text-tertiary text-sm leading-5 font-semibold tracking-normal"
        >Forgot your password ?</RouterLink
      >
    </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Dont't have an account?</span>

      <RouterLink class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" :to="ROUTES.REGISTER">
        Sign up
      </RouterLink>
    </div>
  </RightPanel>
</template>
