import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import http from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          secure: false,
          agent: new http.Agent(),
          preserveHeaderKeyCase: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
