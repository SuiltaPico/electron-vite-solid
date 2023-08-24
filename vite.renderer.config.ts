import { defineConfig } from "vite";
import Solid from "vite-plugin-solid";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [Solid()],
  build: {
    target: "esnext",
  },
});
