import { defineConfig } from "vite";
import path from "path";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [solidPlugin(), dts({ insertTypesEntry: true })],
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
