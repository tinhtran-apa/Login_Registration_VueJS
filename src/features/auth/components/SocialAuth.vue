<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  des: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="pb-5">
    <h4 class="text-[24px] leading-8 font-bold tracking-normal">{{ title }}</h4>
    <span class="text-sm pt-1 text-secondary tracking-normal leading-5">{{ des }}</span>
  </div>
</template>
