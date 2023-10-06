import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new_portfolio/',

  plugins: [
    replace({
      'process.env.OPENWEATHERMAP_API_KEY': JSON.stringify('a'),
      'preventAssignment': true,
    }),
    vue()
  ],

  build: {
    rollupOptions: {
      
    }
  }
})
