<script setup>
defineProps({
  forId: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <label :for="forId" class="text-[14px] leading-5 tracking-normal font-semibold color-[#111827]"><slot /> </label>
</template>
