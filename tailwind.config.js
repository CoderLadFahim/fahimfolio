module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
