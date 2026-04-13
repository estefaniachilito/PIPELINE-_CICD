import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html',
			strict: false
		}),
		paths: {
			base: '/PIPELINE_CICD',
			assets: '/PIPELINE_CICD'
		}
	}
};

export default config;