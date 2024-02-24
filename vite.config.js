import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	root: "src",
	publicDir: "../public",
	base: "./",
	plugins: [react()],
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		sourcemap: true,
	},
});
