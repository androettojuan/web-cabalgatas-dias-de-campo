import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// El sitio se publica como project page de GitHub Pages, por lo que vive bajo
// un subpath. Todos los assets se resuelven contra este base.
export default defineConfig({
  base: "/web-cabalgatas-dias-de-campo/",
  plugins: [react(), tailwindcss()],
});
