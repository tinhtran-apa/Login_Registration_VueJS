<script setup>
import { ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import Button from "@/components/common/button.vue";

const header = {
  title: "Verify your email",
  des: `We sent a 6-digit code to your email. Enter it below to confirm your address.`,
};
let forms = ref([{}]);
for (let index = 0; index < 6; index++) {
  forms.value[index] = {
    id: `otp${index}`,
    title: "",
    type: "number",
    placeholder: "",
  };
}
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" icon="/src/assets/icons/mail.svg" />

    <AuthForm :forms="forms" submit="Send reset link"> </AuthForm>
    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Didn't get it?</span>

      <button class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" to="">
        Resend Code
      </button>
    </div>
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
