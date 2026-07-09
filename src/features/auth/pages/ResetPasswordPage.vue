<script setup>
import { ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/assets/icons/arrow-left.svg";

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
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" icon="/src/assets/icons/lock.svg" />

    <AuthForm :forms="forms" submit="Update password"> </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <RouterLink
        class="flex items-center justify-center gap-1.5 text-tertiary text-[16px] leading-6 tracking-normal font-semibold"
        to="/login"
      >
        <img :src="arrowLeft" alt="" />
        
        <span class="text-sm">Back to sign in</span>
      </RouterLink>
    </div>
  </RightPanel>
</template>
