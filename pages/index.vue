<script setup>
const { locale, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
import { useCounterStore } from "@/stores/counter";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const store = useCounterStore();
const userStore = useUserStore();

const powerTwoCount = computed(() => store.count * store.count);
</script>

<template>
  <div>
    <p class="text-red-500">{{ $t("welcome") }}</p>
    <p>{{ store.count }}</p>
    <p>Username: {{ userStore.username }}</p>
    <button
      @click="store.increment"
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
    >
      +
    </button>
    <button
      @click="userStore.login"
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
    >
      login
    </button>
    <button
      @click="userStore.logout"
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
    >
      logout
    </button>

    <NuxtLink :to="switchLocalePath('id')"> id </NuxtLink>
    <NuxtLink :to="switchLocalePath('en')"> en </NuxtLink>

    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
