<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>
  <div>
    <p class="red-500">{{ $t("welcome") }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
