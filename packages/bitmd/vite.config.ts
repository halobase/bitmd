import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "bitmd",
    }
  },
  plugins: [
    svelte(),
  ]
})