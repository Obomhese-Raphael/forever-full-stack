import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5174 },
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-toastify",
        "axios", // Add axios here
        "@stripe/stripe-js", // Add if using Stripe
      ],
    },
  },
  optimizeDeps: {
    include: [
      "react-router-dom",
      "react-toastify",
      "axios", // Add axios here
      "@stripe/stripe-js", // Add if using Stripe
    ],
  },
});
