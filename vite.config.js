import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Para usar svgs com cores baseadas em currentColor
    svgr({
      exclude: "**/*.colored.svg?react",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: [
            {
              name: "convertColors",
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    }),

    // Para usar svgs nas cores embutidas
    svgr({
      include: "**/*.colored.svg?react",
      svgo: false,
    }),
  ],
});
