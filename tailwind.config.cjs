module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			black: '#141414',
			white: '#fff'
		},

		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
