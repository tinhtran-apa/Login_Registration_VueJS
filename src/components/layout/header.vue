<script setup>
const heads = [
  { title: "1 · Login", path: "/login" },
  { title: "2 · Register", path: "/register" },
  { title: "3 · Forgot Password", path: "/forgot-password" },
  { title: "4 · Reset Password", path: "/reset-password" },
  { title: "5 · Verify Email", path: "/verify-email" },
  { title: "6 · Success", path: "/success" },
];
</script>
<template>
  <header class="relative">
    <nav class="flex items-center gap-2.5 text-secondary h-49px border-b border-[#e5e7eb] pt-3 pb-[13px] pl-4">
      <button class="bg-transparent border-0 hidden"><img src="../../assets/icons/bars.svg" alt="" /></button>
      <template v-for="head in heads" :key="head.key">
        <RouterLink :to="head.path" class="text-xs font-semibold leading-4 border-radius no-underline py-1 px-3">{{
          head.title
        }}</RouterLink>
      </template>
    </nav>
  </header>
</template>
