<script setup>
import Header from "@/components/layout/header.vue";
</script>
<template>
  <Header />
  <main>
    <div class="bg-[#f0f2f8] h-screen py-8">
      <div
        class="flex justify-center max-w-[896px] w-full min-h-[520px] shadow-[0px 10px 15px -3px #0000001a] rounded-[16px] my-0 mx-auto"
      >
        <RouterView />
      </div>
    </div>
  </main>
</template>
