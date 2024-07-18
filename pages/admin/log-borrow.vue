<template>
  <h3 class="font-bold text-lg">Log Borrow Book</h3>
  <p class="mb-4 text-gray-700">You can see your transaction for borrowing book from The Booklet</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Book name</th>
          <th scope="col" class="px-6 py-3">Borrow Date</th>
          <th scope="col" class="px-6 py-3">Admin when borrow</th>
          <th scope="col" class="px-6 py-3">Due Date</th>
          <th scope="col" class="px-6 py-3">Admin when due</th>
          <th scope="col" class="px-6 py-3">Sanction</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro 17"</th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4">$2999</td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "member",
});

useHead({
  title: `Book List | The Booklet`,
  meta: [{ name: "description", content: "List Book on The Booklet" }],
});
</script>
