import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";

const root = "src/pages/";

export default defineConfig({
  root: root,
  publicDir: "../../public",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  plugins: [
    ViteEjsPlugin(mainData, {
      ejs: {
        beautify: true,
      },
    }),
  ],
});
