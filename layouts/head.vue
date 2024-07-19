<template>
  <HeadSidebar></HeadSidebar>
  <div class="p-8 sm:ml-64">
    <slot />
  </div>
</template>

<script setup>
  import HeadSidebar from "~/components/HeadSidebar.vue";
</script>
