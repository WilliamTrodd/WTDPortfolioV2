module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'hero': [
					'8rem',
					{lineHeight: '1',
					letterSpacing: '-0.01em',
					fontWeight: '700',
				}
				]
			},
			colors: {
				'accent-green': '#91ff00',
				'green-text': '#8ccb42'
			}
		},
	},
	plugins: [],
};
