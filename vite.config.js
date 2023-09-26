import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new_portfolio/',

  plugins: [
    replace({
      'process.env.OPENWEATHERMAP_API_KEY': JSON.stringify('7bddfc91ef12d670b8ae3ba9b9c51e45'),
      'preventAssignment': true,
    }),
    vue()
  ],

  build: {
    rollupOptions: {
      
    }
  }
})
