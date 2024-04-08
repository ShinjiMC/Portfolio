import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "Portfolio/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests",
    mockReset: true,
    coverage: {
      reporter: ["text", "lcov"],
      exclude: ["**/main.tsx", "**/.eslintrc.cjs"],
    },
  },
});
