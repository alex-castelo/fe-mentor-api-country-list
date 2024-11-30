// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: { enabled: true },

  pages: true,

  css: ["~/assets/styles/index.css"],

  modules: [
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "@nuxtjs/critters",
    "nuxt-purgecss",
  ],

  fontawesome: {
    icons: {
      solid: ["moon", "sun", "spinner", "arrow-left", "magnifying-glass"],
    },
  },

  purgecss: {
    whitelistPatterns: ["svg-inline--fa"],
  },
});
