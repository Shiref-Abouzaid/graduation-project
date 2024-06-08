import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['v-list-recognize-title'].includes(tag)
        }
      }
    }),
    vuetify({
      autoImport: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    outDir: 'build',
    assetFileNames: (assetInfo) => {
      if (assetInfo.name === '_plugin-vue_export-helper-c27b6911.js') return 'plugin-vue_export-helper-c27b6911.js';
      return assetInfo.name;
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue']
  }
});
