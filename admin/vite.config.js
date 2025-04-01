import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5174 },
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
