import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/yaourt-chi/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        interior: resolve(__dirname, 'interior.html'),
        toppings: resolve(__dirname, 'toppings.html'),
        creations: resolve(__dirname, 'customer-creations.html'),
        market: resolve(__dirname, 'location-market-research.html'),
      },
    },
  },
});
