// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				// List your html files here, e.g:
				main: resolve(__dirname, 'index.html'),
				api: resolve(__dirname, 'src/pages/apiTest.html'),
				auth: resolve(__dirname, 'src/pages/authTest.html'),
				bmi: resolve(__dirname, 'src/pages/bmi.html'),
			},
		},
	},
	base: './',
});
