<template>
  <div class="flex justify-between items-center">
    <div class="w-6/12">
      <h3 class="font-bold text-lg">Book List</h3>
      <p class="mb-4 text-gray-700">Browse million knowlege on The Booklet</p>
    </div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      data-modal-target="crud-modal"
      data-modal-toggle="crud-modal"
      @click="showBookModal">
      Add Book
    </button>
  </div>
  <div v-show="showModal">
    <FormBook @closeFormModal="closeBookModal"></FormBook>
  </div>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-8 gap-y-4">
    <div v-for="book in books">
      <BookCard :book="book"></BookCard>
    </div>
  </div>
</template>

<script setup>
  import BookCard from "~/components/BookCard.vue";
  import FormBook from "~/components/Modals/FormBook.vue";
  definePageMeta({
    layout: "admin",
  });

  useHead({
    title: `Book List | The Booklet`,
    meta: [{ name: "description", content: "List Book on The Booklet" }],
  });

  const data = await $fetch("/api/get-books");
  const books = data.data;
  console.log(books);

  let showModal = ref(false);

  function showBookModal() {
    showModal.value = true;
  }

  function closeBookModal() {
    showModal.value = false;
  }
</script>
