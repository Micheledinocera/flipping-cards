const path = require('path');
let development = process.env.NODE_ENV !== 'production'
let baseURL = development? "/" : "/swapping-cards/"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/main.sass"],
  components: [
    { path: '~/components/', pathPrefix: false },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/variables.sass"'
        },
      },
    },
  },
  modules: ['@davestewart/nuxt-scrollbar', '@pinia/nuxt'],
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },
  imports: {
    dirs: ['models/*.ts','stores/*.ts'],
  },
  app: {
    baseURL: baseURL
  },
})