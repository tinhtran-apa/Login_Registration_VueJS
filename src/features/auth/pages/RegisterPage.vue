<script setup>
import { computed, reactive, ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import AuthHeader from "../components/AuthHeader.vue";
import { RouterLink } from "vue-router";
import CheckBox from "@/components/common/checkbox.vue";
import { clearError, validateRegister } from "../validators/authValidates.js";
import { showPassword } from "../utils/showPassword.js";
import { ROUTES } from "@/constants/routes.js";
import googleIcon from "@/assets/icons/google.svg";
import githubIcon from "@/assets/icons/github.svg";
const header = {
  title: "Create your account",
  des: "Start your 14-day free trial. No card required",
};

const forms = ref([
  {
    id: "fullName",
    title: "Full Name",
    type: "text",
    placeholder: "Enter your name",
  },
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
  {
    id: "confirmPassword",
    title: "Confirm Password",
    type: "password",
    placeholder: "Re-enter your password",
  },
]);

const socials = [
  {
    title: "Google",
    icon: googleIcon,
  },
  {
    title: "Github",
    icon: githubIcon,
  },
];
const errors = ref({});

const formSubmit = reactive({ fullName: "", email: "", password: "", confirmPassword: "", policy: false });

const handleSubmit = () => {
  const result = validateRegister(formSubmit);
  errors.value = result || {};
  if (!result) {
    alert("Register successful !");
  }
};

const handleClearError = (field) => {
  clearError(errors.value, field);
};

const handleShowPassword = (field) => {
  showPassword(forms.value, field);
};

const errorPolicy = computed(() => {
  return errors.value.policy ? "underline decoration-red-500" : "";
});
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :socials="socials" :header="header">or</AuthHeader>

    <AuthForm
      :forms="forms"
      v-model="formSubmit"
      @submit="handleSubmit"
      @clear-error="handleClearError"
      @show-password="handleShowPassword"
      submit="Sign Up"
      :errors="errors"
    >
      <div class="text-secondary text-sm leading-5 font-semibold flex gap-[10px]">
        <CheckBox v-model="formSubmit.policy" @change="handleClearError('policy')" />
        <span :class="['text-secondary tracking-normal', errorPolicy]"
          >I agree to the

          <span class="text-tertiary text-[16px] leading-6 font-semibold tracking-normal">Terms of Service</span>

          and

          <span class="text-tertiary text-[16px] leading-5 font-semibold tracking-normal">Privacy Policy</span>
        </span>
      </div>
    </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Already have an account ?</span>
      <RouterLink class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" :to="ROUTES.LOGIN">
        Sign In
      </RouterLink>
    </div>
  </RightPanel>
</template>
