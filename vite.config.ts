import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('/node_modules/')) return;
          if (id.includes('/recharts/') || id.includes('/d3-')) return 'charts';
          if (id.includes('/framer-motion/') || id.includes('/motion-dom/') || id.includes('/motion-utils/')) return 'motion';
          if (id.includes('/@react-aria/') || id.includes('/@react-stately/') || id.includes('/@react-types/') || id.includes('/@internationalized/')) return 'react-aria';
          if (id.includes('/@heroui/')) return 'heroui';
          if (id.includes('/react-dom/') || id.includes('/scheduler/') || id.includes('/react/')) return 'react-vendor';
          return 'vendor';
        }
      }
    }
  },
  server: {
    allowedHosts: true,
  },
});
