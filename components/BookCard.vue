<template>
  <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img class="rounded-t-lg aspect-[5/6]" :src="book.img" alt="" />
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{{ book.title }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ book.description }}</p>
      <a
        :href="`/member/book/${book.id}`"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  book: {
    type: {},
    required: true,
    default: {
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: "https://bukukita.com/babacms/displaybuku/116969_f.jpg",
      id: "1",
    },
  },
});
</script>
