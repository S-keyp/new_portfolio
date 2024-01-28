import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/new_portfolio/',   HAVE TO PUT IT BACK FOR GH PAGE

  plugins: [
    vue()
  ],

  build: {
    manifest: true,
    rollupOptions: {
        input: './src/main.ts',
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
}
})
