<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table
              class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 table-auto">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    No
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataReciever">
                  <td
                    scope="col"
                    class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    {{ index }}
                  </td>
                  <td
                    scope="col"
                    class="px-2 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    {{ item.name }}
                  </td>
                  <td
                    scope="col"
                    class="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      @click="sendMessage(item)">
                      Share
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        templateMessage:
          "Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Sdr/Sdri [nama] untuk hadir dan merayakan momen istimewa dalam hidup kami saat Andi dan Anastasia menyatukan cinta dalam ikatan suci pernikahan. Acara akan dilangsungkan pada 24 Juli 2099. Kami sangat mengharapkan kehadiran dan doa restu [nama] dalam memeriahkan hari bahagia kami. Terima kasih atas perhatian dan kesediaan Anda untuk hadir.\nUntuk rincian undangan lengkap, silakan kunjungi link berikut: [url]. ",
        dataReciever: [
          {
            name: "Naomi",
          },
          {
            name: "Agelina",
          },
          {
            name: "Nyewnyewnyew",
          },
        ],
        url: "http://andianastasia.nyewnyewnyew.com",
      };
    },
    methods: {
      sendMessage(item) {
        let waUrl = new URL("https://wa.me/");

        let message = this.templateMessage;
        message = message.replaceAll("[nama]", item.name);
        message = message.replaceAll("[url]", this.url);

        waUrl.searchParams.append("text", message);

        let newTab = window.open(waUrl, "_blank");
      },
    },
  };
</script>
