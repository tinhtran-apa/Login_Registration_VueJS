<script setup>
const model = defineModel({
  type: [String, Number],
  default: "",
});
</script>

<template>
  <input
    v-model="model"
    class="border border-border pt-[10px] pb-[10px] pl-[14px] pr-[14px] rounded-[12px] max-w-[352px] w-full text-[14px] leading-0 leading-5 font-normal tracking-normal"
  />
</template>
