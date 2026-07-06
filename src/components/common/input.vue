<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>
<template>
  <input
    :placeholder="placeholder"
    :type="type"
    class="border border-[#e5e7eb] pt-[10px] pb-[10px] pl-[14px] pr-[14px] rounded-[12px] max-w-[352px] w-full text-[14px] leading-0 leading-5 font-normal tracking-normal"
  />
</template>
