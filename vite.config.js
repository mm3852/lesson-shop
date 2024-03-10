import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/lesson-shop/" : "/",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
