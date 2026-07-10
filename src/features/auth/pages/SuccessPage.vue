<script setup>
import { ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import success from "@/assets/icons/success.svg";
import Button from "@/components/common/button.vue";

const header = {
  title: "You're all set",
  des: "Your email has been verified and your account is ready. Welcome to Northwind — let's get you to your workspace.",
};
const forms = ref([]);
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <div class="p-[13px] rounded-full bg-success-bg w-fit flex mb-5 ml-auto mr-auto">
      <img :src="success" alt="" />
    </div>
    <div class="text-center sm:text-center [&_.pb-5]:sm:!text-center">
      <AuthHeader :header="header" />
    </div>

    <div class="pb-5">
      <Button>Continue to dashboard</Button>
    </div>

    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Redirecting you automatically in 1 second…</span>
    </div>
  </RightPanel>
</template>
