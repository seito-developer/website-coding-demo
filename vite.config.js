import { defineConfig } from "vite";
import { networkInterfaces } from "os";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";
import VitePluginBrowserSync from "vite-plugin-browser-sync";
import { globSync } from "glob";
import path from "path";

const ip = Object.values(networkInterfaces())
  .flat()
  .find((i) => i.family === "IPv4" && !i.internal)?.address;
const root = "src/pages/";

export default defineConfig({
  root: root,
  publicDir: "../../public",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        globSync(`${root}/**/*.html`).map((file) => {
          const relativePath = path.relative(root, file);
          const fileNameWithoutExt = relativePath.slice(
            0,
            relativePath.length - path.extname(file).length
          );
          return [fileNameWithoutExt, file]; // キーと値のペアを返す
        })
      ),
    },
  },
  plugins: [
    VitePluginBrowserSync(),
    ViteEjsPlugin(mainData, {
      ejs: {
        beautify: true,
      },
    }),
  ],
  server: {
    host: ip ? ip : "localhost",
    watch: {
      ignored: ["!**/node_modules/**"],
      usePolling: true,
      depth: 10,
    },
  },
});
