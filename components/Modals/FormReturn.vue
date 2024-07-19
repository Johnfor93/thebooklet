<template>
  <div id="crud-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full flex bg-opacity-25 bg-gray-800">
    <div class="p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Set Return Date</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
            @click="closeModal"
          >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label for="memberName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Member Name</label>
              <div
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {{ props.detail.membername }}
              </div>
            </div>
            <div class="col-span-2">
              <label for="bookName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
              <div
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {{ props.detail.title }}
              </div>
            </div>
            <div class="col-span-2">
              <label for="borrowDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Borrow Date</label>
              <div
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {{ props.detail.borrow_date }}
              </div>
            </div>
            <div class="col-span-2">
              <label for="dueDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
              <div
                type="date"
                name="dueDate"
                id="dueDate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                {{ props.detail.due_date }}
              </div>
              <small class="text-gray-400">The book must be return after 7 days from borrow date</small>
            </div>
            <div class="col-span-2">
              <label for="returnDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Return Date</label>
              <input
                type="date"
                name="returnDate"
                id="returnDate"
                v-model="returnDate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div class="col-span-2">
              <label for="sanction" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sanction</label>
              <input
                type="number"
                name="sanction"
                id="sanction"
                v-model="sanction"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="submitLogReturn"
          >
            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
            </svg>
            Set Return
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

const emit = defineEmits(["closeFormReturnModal"]);
function closeModal(inserted = false) {
  console.log("MASUK", props.detail);
  emit("closeFormReturnModal", inserted);
}

const props = defineProps({
  detail: Object,
});

const returnDate = ref("");
const sanction = ref(0);

function formatDate(param) {
  console.log(moment(param).format());
  return moment(param).format("MM/DD/yyyy");
}

async function submitLogReturn() {
  let userLoggedIn = await localStorage.getItem("user");
  let userData = await JSON.parse(userLoggedIn);

  let param = {
    idLogBorrow: props.detail.id,
    idAdmin: userData.id,
    returnDate: returnDate.value,
    sanction: sanction.value,
  };

  console.log(param);
  let response = await $fetch("/api/add-return", {
    method: "POST",
    body: param,
  });

  if (response.success) {
    closeModal(true);
  } else {
    alert("error");
  }
}
</script>
