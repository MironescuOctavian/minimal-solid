import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "minimal-solid",
    compatibilityDate: "2026-08-27",
    entrypoint: "./src/fetch.ts",
  },
});
