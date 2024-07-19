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
      @click="showBookModal"
    >
      Add Book
    </button>
  </div>
  <div v-show="showModal">
    <FormBook @closeFormModal="closeBookModal"></FormBook>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-8 gap-y-4">
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

let books = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://bukukita.com/babacms/displaybuku/116969_f.jpg",
    id: "1",
  },
  {
    title: "Fundamentals of Computer Graphics, Second Edition",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://camo.githubusercontent.com/141efa68870a2f72e5ba86b468ec364023005e57b82f8679c8529188323df04f/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30352f77705f656469746f725f6d645f33323131303033346430643262626639656661313039306364353431613066352e6a7067",
    id: "2",
  },
  {
    title: "Fundamentals of Computer Graphics, Third Edition",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://camo.githubusercontent.com/069e43a562084347fa3a206a3634bcbb76f62e8e5c457e13098a245fa6397c2b/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f31322f2545382542352538342545362542412539302545352538382538362545342542412541422d46756e64616d656e74616c732d6f662d436f6d70757465722d47726170686963732d54686972642d45646974696f6e2545392541422539382545362542382538352545382538422542312545362539362538375044462545342542382538422545382542442542442e706e67",
    id: "3",
  },
  {
    title: "Physically Based Rendering From Theory To Implementation (Fourth Edition)",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://camo.githubusercontent.com/25c386cda97df2aca47b4e8e2ecc9b4fa41c6f3c9c4f3a8a6b306a37a4a7f67e/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032332f30352f77705f656469746f725f6d645f30373834386635313936363863396637363539306531346164343139383931662e6a7067",
    id: "4",
  },
  {
    title: "Real-Time Rendering, Second Edition",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://camo.githubusercontent.com/1a8edd96595fcd0bffc37425e036910bb220e4f7916477b62a4168eb31b9a76f/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30382f77705f656469746f725f6d645f64366135373236306636616131373839666539313035336431333866633638642e6a7067",
    id: "5",
  },
  {
    title: "Real-Time Rendering, Third Edition",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://camo.githubusercontent.com/6e2d874469b488346938888928b7a827dd6f33840f027663e15a5c3fc3cfcb2e/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30382f2545382542352538342545362542412539302545352538382538362545342542412541422d5265616c2d54696d652d52656e646572696e672d54686972642d45646974696f6e2d2545382538422542312545362539362538372545352538452539462545372538392538385064662545342542382538422545382542442542442e706e67",
    id: "6",
  },
];

let showModal = ref(false);

function showBookModal() {
  showModal.value = true;
}

function closeBookModal() {
  showModal.value = false;
}
</script>
