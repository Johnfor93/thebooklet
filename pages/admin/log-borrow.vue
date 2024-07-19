<template>
  <div class="flex justify-between items-center">
    <div class="w-6/12">
      <h3 class="font-bold text-lg">Log Borrow Book</h3>
      <p class="mb-4 text-gray-700">You can see transaction for borrowing book from The Booklet</p>
    </div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      data-modal-target="crud-modal"
      data-modal-toggle="crud-modal"
      @click="showBorrowModal"
    >
      New Transaction
    </button>
  </div>
  <div v-show="showModal">
    <FormBorrow @closeFormModal="closeBorrowFormModal"></FormBorrow>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Member name</th>
          <th scope="col" class="px-6 py-3">Book name</th>
          <th scope="col" class="px-6 py-3">Borrow Date</th>
          <th scope="col" class="px-6 py-3">Due Date</th>
          <th scope="col" class="px-6 py-3">Return Date</th>
          <th scope="col" class="px-6 py-3">Sanction</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in logBorrow">
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.membername }}</th>
          <td class="px-6 py-4">{{ item.title }}</td>
          <td class="px-6 py-4">{{ formatDate(item.borrow_date) }}</td>
          <td class="px-6 py-4">{{ formatDate(item.due_date) }}</td>
          <td class="px-6 py-4">{{ item.return_date ? formatDate(item.return_date) : "-" }}</td>
          <td class="px-6 py-4">{{ item.return_date ? item.sanction : "-" }}</td>
          <td class="px-6 py-4">
            <span v-if="item.return_date" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Returned</span>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              @click="showReturnModalFunction(item)"
              v-else
            >
              Set Return
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <FormReturn v-show="showReturnModal" :detail="borrowDetail" @closeFormReturnModal="closeFormReturnModal"></FormReturn>
</template>

<script setup>
import FormBorrow from "~/components/Modals/FormBorrow.vue";
import FormReturn from "~/components/Modals/FormReturn.vue";
import moment from "moment";

definePageMeta({
  layout: "admin",
});

useHead({
  title: `Book List | The Booklet`,
  meta: [{ name: "description", content: "List Book on The Booklet" }],
});

let showModal = ref(false);
const showReturnModal = ref(false);

function showBorrowModal() {
  showModal.value = true;
}

function closeBorrowFormModal(inserted) {
  showModal.value = false;
  if (inserted) {
    getLogBorrow();
  }
}

function showReturnModalFunction(item) {
  showReturnModal.value = true;
  borrowDetail.value = item;
}

function closeFormReturnModal() {
  showReturnModal.value = false;
  borrowDetail.value = [];
  getLogBorrow();
}

const logBorrow = ref([]);
const borrowDetail = ref({});

async function getLogBorrow() {
  let response = await $fetch("/api/log-return");
  logBorrow.value = response.data;
  console.log(logBorrow.value);
}

function formatDate(param) {
  console.log(moment(param).format());
  return moment(param).format("DD MMM YYYY");
}

getLogBorrow();
</script>
