import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/PIPELINE_CICD/' // 👈 ESTE ES EL QUE ARREGLA LOS _app
});