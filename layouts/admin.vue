<template>
  <AdminSidebar></AdminSidebar>
  <div class="p-8 sm:ml-64">
    <slot />
  </div>
</template>

<script setup>
import AdminSidebar from "~/components/AdminSidebar.vue";
</script>
