import { defineConfig } from "vitest/config";
import path from "path";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  test: {
    environment: "jsdom",
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
      inline: [/solid-js/],
    },
    threads: false,
    isolate: false,
  },
  plugins: [solidPlugin(), dts({ insertTypesEntry: true }), eslint()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "pyscript-solid",
      formats: ["es", "umd"],
    },
    sourcemap: true,
    target: "esnext",
    polyfillDynamicImport: false,
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "solid-js",
        },
      },
    },
  },
});
