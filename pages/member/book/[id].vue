<template>
  <h3 class="font-bold text-lg">{{ book.title }}</h3>
  <p class="text-gray-500 mb-4">{{ book.author }} - {{ book.year }}</p>
  <div class="flex">
    <div class="w-3/12 rounded">
      <img class="rounded aspect-[3/4]" :src="book.img" alt="" />
    </div>
    <div class="w-full px-4">
      <p>
        {{ book.synopsys }}
      </p>
    </div>
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

let book = {
  title: "Physically Based Rendering From Theory To Implementation (Fourth Edition)",
  description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  img: "https://camo.githubusercontent.com/25c386cda97df2aca47b4e8e2ecc9b4fa41c6f3c9c4f3a8a6b306a37a4a7f67e/68747470733a2f2f7777772e73747562626f726e6875616e672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032332f30352f77705f656469746f725f6d645f30373834386635313936363863396637363539306531346164343139383931662e6a7067",
  id: "4",
  author: "James Bond",
  year: "2014",
  synopsys:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
</script>
