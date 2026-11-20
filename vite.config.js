import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that runs our React app during development (npm run dev)
// and builds it for production (npm run build).
export default defineConfig({
  plugins: [react()],
});
