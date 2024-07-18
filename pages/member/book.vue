<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-8 gap-y-4">
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
  </div>
</template>

<script setup>
import BookCard from "~/components/BookCard.vue";
definePageMeta({
  layout: "member",
});
</script>
