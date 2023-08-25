import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [Solid(), UnoCSS()],
  build: {
    target: 'esnext',
  },
})
