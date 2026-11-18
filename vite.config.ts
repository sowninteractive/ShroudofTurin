import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// base "./" makes asset URLs relative, so the build works on GitHub Pages
// under any repo name (https://<user>.github.io/<repo>/) or a custom domain.
export default defineConfig(() => ({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
