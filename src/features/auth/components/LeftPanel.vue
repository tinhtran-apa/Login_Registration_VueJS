<script setup>
import { ref } from "vue";
const contents = ref(["Encrypted credentials", "Email verification built-in", "Password recovery flow"]);
</script>

<template>
  <div
    class="bg-gradient-to-br from-[#6c63ff] via-[#4f46e5] to-[#7c6af7] p-10 rounded-s-2xl relative hidden sm:flex flex-col justify-between lg:max-w-[376.3125px] lg:w-full lg:p-10 sm:w-[248px] sm:px-[15px]"
  >
    <div
      class="absolute top-[96px] left-[156.31px] rounded-[16777200px] opacity-10 bg-[#ffffff80] w-[180px] h-[180px]"
    ></div>

    <div
      class="absolute top-[32px] left-[156.31px] rounded-[16777200px] opacity-20 bg-[#ffffff59] w-[280px] h-[280px]"
    ></div>

    <div class="flex justify-start items-center gap-3">
      <div class="flex p-2 shadow-[0px 1px 3px 0px #0000001a] rounded-xl bg-primary">
        <img src="../../../assets/icons/northwind-logo.svg" alt="" />
      </div>

      <span class="text-primary font-semibold leading-7 tracking-[-0.45px] text-lg">Northwind</span>
    </div>

    <div>
      <h3 class="text-[30px] font-bold leading-[37.5px] tracking-normal text-primary pb-3">
        One account for everything your team ships
      </h3>

      <span class="text-[#ffffffb2] text-sm font-normal leading-[22.75px] tracking-normal"
        >Secure sign-in, instant onboarding, and a verified inbox — all in a few clicks.
      </span>
    </div>

    <div class="flex flex-col gap-3">
      <template v-for="content in contents" :key="content.key">
        <div class="flex bg-transparent gap-2">
          <div class="flex self-center p-0.5 rounded-[16777200px] border border-[#ffffff66]">
            <img src="../../../assets/icons/check.svg" alt="" />
          </div>

          <span class="font-normal text-sm leading-5 tracking-normal text-[#ffffffcc]">{{ content }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
