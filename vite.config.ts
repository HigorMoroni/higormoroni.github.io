import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'ion-icon'
        }
      }
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts' // opcional
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  base: '/'
});
