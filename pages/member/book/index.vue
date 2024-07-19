<template>
  <h3 class="font-bold text-lg">Book List</h3>
  <p class="mb-4 text-gray-700">Browse million knowlege on The Booklet</p>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-8 gap-y-4">
    <div v-for="book in books">
      <BookCard :book="book"></BookCard>
    </div>
  </div>
</template>

<script setup>
  import BookCard from "~/components/BookCard.vue";
  definePageMeta({
    layout: "member",
  });

  useHead({
    title: `Book List | The Booklet`,
    meta: [{ name: "description", content: "List Book on The Booklet" }],
  });

  const data = await $fetch("/api/get-books");
  const books = data.data;
  console.log(books);
</script>
