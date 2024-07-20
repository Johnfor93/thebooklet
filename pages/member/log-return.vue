<template>
  <h3 class="font-bold text-lg">Log Return Book</h3>
  <p class="mb-4 text-gray-700">You can see your transaction for returning book from The Booklet</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Book name</th>
          <th scope="col" class="px-6 py-3">Borrow Date</th>
          <th scope="col" class="px-6 py-3">Return Date</th>
          <th scope="col" class="px-6 py-3">Due Date</th>
          <th scope="col" class="px-6 py-3">Admin when due</th>
          <th scope="col" class="px-6 py-3">Sanction</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in logReturn">
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.title }}</th>
          <td class="px-6 py-4">{{ formatDate(item.borrow_date) }}</td>
          <td class="px-6 py-4">{{ formatDate(item.return_date) }}</td>
          <td class="px-6 py-4">{{ formatDate(item.due_date) }}</td>
          <td class="px-6 py-4">{{ item.adminreturnname }}</td>
          <td class="px-6 py-4">{{ item.sanction }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import moment from "moment";
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "member",
});

useHead({
  title: `Book List | The Booklet`,
  meta: [{ name: "description", content: "List Book Return on The Booklet" }],
});

const logReturn = ref([]);
const userData = ref({});

async function getLogReturn() {
  let userLoggedIn = await localStorage.getItem("user");
  userData.value = await JSON.parse(userLoggedIn);
  console.log("myUser", userLoggedIn);
  let response = await $fetch("/api/log-return-member", {
    method: "POST",
    body: {
      userId: userData.value.id,
    },
  });
  console.log(response);
  logReturn.value = response.data;
  console.log(logReturn.value);
}

function formatDate(param) {
  console.log(moment(param).format());
  return moment(param).format("DD MMM YYYY");
}

onMounted(() => {
  getLogReturn();
});
</script>
