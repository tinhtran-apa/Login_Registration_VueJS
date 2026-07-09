<script setup>
import Header from "@/components/layout/Header.vue";
</script>
<template>
  <Header />
  <main>
    <div class="bg-[#f0f2f8] h-screen py-8 sm:px-2.5 sm:px-[10px] overflow-hidden">
      <div
        class="flex justify-center lg:max-w-[896px] w-full min-h-[520px] shadow-[0px_10px_15px_-3px_#0000001a] rounded-[16px] my-0 mx-auto sm:max-w-[700px] max-w-[380px]"
      >
        <RouterView />
      </div>
    </div>
  </main>
</template>
