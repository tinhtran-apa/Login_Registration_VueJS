<script setup>
import { ref, Transition } from "vue";
import { useRoute } from "vue-router";

const heads = [
  { title: "1 · Login", path: "/login" },
  { title: "2 · Register", path: "/register" },
  { title: "3 · Forgot Password", path: "/forgot-password" },
  { title: "4 · Reset Password", path: "/reset-password" },
  { title: "5 · Verify Email", path: "/verify-email" },
  { title: "6 · Success", path: "/success" },
];

const menuMobile = ref(false);

const route = useRoute();

const checkPath = (field) => {
  return route.path == field ? "sm:rounded-[16777200px] px-3 py-1 bg-tertiary text-primary" : "";
};

const handleShowMenu = () => {
  menuMobile.value = !menuMobile.value;
};
</script>
<template>
  <header class="relative">
    <nav class="flex items-center gap-2.5 text-secondary h-[49px] border-b border-[#e5e7eb] pt-3 pb-[13px] pl-4">
      <button @click="handleShowMenu" class="bg-transparent border-0 sm:hidden block transition-transform duration-200 active:scale-95">
        <img src="../../assets/icons/bars.svg" alt="" />
      </button>

      <template v-for="head in heads" :key="head">
        <RouterLink
          :to="head.path"
          :class="[
            'hidden sm:block text-xs font-semibold leading-4 border-radius no-underline py-1 px-3',
            checkPath(head.path),
          ]"
          >{{ head.title }}</RouterLink
        >
      </template>
    </nav>
    <Transition
      enter-active-class="duration-300"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <aside v-show="menuMobile" class="absolute h-screen w-full bg-transparent z-10 block sm:hidden">
        <div class="flex flex-col max-w-[220px] p-5 bg-primary h-screen gap-5">
          <template v-for="head in heads" :key="head">
            <RouterLink
              :to="head.path"
              :class="[
                'leading-5 rounded-[10px] block sm:hidden text-[16px] border-radius no-underline',
                checkPath(head.path),
              ]"
              >{{ head.title }}</RouterLink
            >
          </template>
        </div>
      </aside>
    </Transition>
  </header>
</template>
