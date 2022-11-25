/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				"brand-gradient":
					"linear-gradient(149.14deg, #C44968 10.49%, #B2294B 95.44%)",
				"online-gradient":
					"linear-gradient(113.76deg, #45C99A 20.81%, #32C08D 90.36%)",
			},
			colors: {
				brand: "#B2294B",
				brandLight: "#F7EAED",
				brandDark: "#851F38",
				secondaryYellow: "#E4BC28",
				secondaryYellowLight: "#FCF8E9",
				secondaryGreen: "#32C08D",
				secondaryGreenLight: "#EAF9F4",
				black: "#1E1E1E",
				greyContent: "#878787",
				greyBorder: "#E0E0E0",
				greyForeground: "#F0F0F0",
				greyBackground: "#FAFAFA",
				modalOverlay: "rgba(30, 30, 30, 0.5)",
				hover: "rgba(30, 30, 30, 0.08)",
				pressed: "rgba(30, 30, 30, 0.12)",
				brandHover: "rgba(178, 41, 75, 0.08)",
				brandPressed: "rgba(178, 41, 75, 0.12)",
				disableForeground: "rgba(30, 30, 30, 0.4)",
				disableBackground: "rgba(30, 30, 30, 0.08)",
			},
		},
	},
	plugins: [],
};
