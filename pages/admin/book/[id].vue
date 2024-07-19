<template>
  <h3 class="font-bold text-lg">{{ book.title }}</h3>
  <p class="text-gray-500 mb-4">{{ book.author }} - {{ book.yearbook }}</p>
  <div class="flex">
    <div class="w-3/12 rounded">
      <img class="rounded aspect-[3/4]" :src="book.coverimg" alt="" />
    </div>
    <div class="w-full px-4">
      <h5 class="font-bold text-lg text-blue-900 mb-3">Book Description</h5>
      <p class="mb-5">
        {{ book.description }}
      </p>
      <h5 class="font-bold text-lg text-blue-900 mb-3">
        More Information about this book
      </h5>

      <div class="md:w-6/12 w-full relative overflow-x-auto sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Year of Book
              </th>
              <td class="px-6 py-4">{{ book.yearbook }}</td>
            </tr>
            <tr class="border border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Amount of Book
              </th>
              <td class="px-6 py-4">{{ book.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "admin",
  });

  useHead({
    title: `Book List | The Booklet`,
    meta: [{ name: "description", content: "List Book on The Booklet" }],
  });

  const route = useRoute();

  const data = await $fetch("/api/book-detail", {
    method: "POST",
    body: {
      id: route.params.id,
    },
  });
  const book = data.data;

  console.log(book);
</script>
