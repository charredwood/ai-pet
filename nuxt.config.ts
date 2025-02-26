import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
  },
  vite: {
    plugins: [tailwindcss(),],
  },
  css: ['~/styles.css'],
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  serverMiddleware: [
    { path: "/api/chat", handler: "~/server/api/chat.js" },
  ],
})