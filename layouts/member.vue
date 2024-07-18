<template>
  <sidebar></sidebar>
  <div class="p-8 sm:ml-64">
    <slot />
  </div>
</template>

<script setup>
import sidebar from "~/components/sidebar.vue";
</script>
