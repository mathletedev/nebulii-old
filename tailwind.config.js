const { neutral } = require("tailwindcss/colors");

module.exports = {
	content: [
		"src/pages/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto"]
			},
			colors: {
				gray: neutral
			}
		}
	},
	plugins: [],
	important: true
};
