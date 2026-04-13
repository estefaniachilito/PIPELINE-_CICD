import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null
		}),
		paths: {
			base: '/PIPELINE_CICD'
		},
		prerender: {
			default: true
		}
	}
};

export default config;