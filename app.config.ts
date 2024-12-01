import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
    build: {
      outDir: "./dist",
      emptyOutDir: true
    }
  },
  ssr: false,
});
