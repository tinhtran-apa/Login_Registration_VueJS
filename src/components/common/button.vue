<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
});
</script>
<template>
  <button
    :type="type"
    class="py-4 rounded-[12px] bg-tertiary text-primary text-[14px] font-semibold border-0 w-full shadow-[0px 1px 3px 0px #0000001a] text-[14px] leading-5 tracking-normal"
  >
    <slot />
  </button>
</template>
