import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// O Nitro detecta a Vercel automaticamente no build (variável VERCEL=1)
// e gera a saída no formato Build Output API (.vercel/output).
export default defineConfig({
  plugins: [tsconfigPaths(), tanstackStart(), viteReact(), tailwindcss(), nitro()],
});
