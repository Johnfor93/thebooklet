// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "The Bookshelf",
    },
  },
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ["~/plugins/preline.client.ts"],
  compatibilityDate: "2024-07-03",
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-lucide-icons"],
  lucide: {
    namePrefix: "li-",
  },
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
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  },
});
