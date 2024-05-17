module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			mobile: { max: '820px' },
			xs: { max: '640px' },
			xxs: { max: '370px' },
		},
		colors: {
			"theme-gray": "#282828"
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
			fontSize: {
				'40px': '40px',
				"22px": "22px"
			},
			lineHeight: {
				'52.08px': '52.08px',
				"28.64px": "28.64px",
				"18.23px": "18.23px",
				"23.44px": "23.44px",
				"20.83px": "20.83px"
			},
		},
	},
	plugins: [],
};
