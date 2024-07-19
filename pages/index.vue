<template>
  <section
    class="bg-white dark:bg-gray-900 flex align-middle justify-center h-screen">
    {{ user }}
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex items-center justify-center h-screen">
      <div class="h-fit">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 dark:text-white">
          <img class="w-8 h-8 mr-2" src="/images/logo.webp" alt="logo" />
          The Bookself
        </a>
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at The Booklet we focus on books where technology, innovation,
          and capital can unlock long-term value and drive education growth.
        </p>
        <div
          class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/account/login"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Login
          </a>
          <a
            href="/account/register"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Register
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { fetchUserAPI } from "~/server/user";

  const user = ref(null);

  async function getUser() {
    console.log(user);
    const data = await fetchUserAPI();
    console.log(data);
    user.value = data[0];
  }

  getUser();
</script>
