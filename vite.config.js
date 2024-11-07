// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'service.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        client1: resolve(__dirname, 'sub-pages/client1.html'),
        client2: resolve(__dirname, 'sub-pages/client2.html'),
        client3: resolve(__dirname, 'sub-pages/client3.html'),
        client4: resolve(__dirname, 'sub-pages/client4.html'),
        client5: resolve(__dirname, 'sub-pages/client5.html'),
        client6: resolve(__dirname, 'sub-pages/client6.html'),
      },
    },
  },
})