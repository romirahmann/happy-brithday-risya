import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "192.168.9.192", // Ganti 'my-app.local' dengan domain atau IP yang diinginkan
    port: 5173, // Opsional: ubah port jika diperlukan
  },
  plugins: [react()],
});
