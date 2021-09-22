import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
