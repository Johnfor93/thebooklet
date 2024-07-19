<template>
  <h3 class="font-bold text-lg">{{ book.title }}</h3>
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
};
</script>
