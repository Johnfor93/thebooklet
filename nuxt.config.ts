// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "The Bookshelf",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ["~/plugins/preline.client.ts"],
  compatibilityDate: "2024-07-03",
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  i18n: {
    lazy: true,
    langDir: "lang",
    defaultLocale: "id",
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
      {
        code: "id",
        file: "id-ID.json",
      },
    ],
  },
});
