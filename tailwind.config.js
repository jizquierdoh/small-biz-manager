module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: [
			{
				smallbiz: {
					"primary": "#1d4ed8",
					"secondary": "#0284c7",
					"accent": "#ea580c",
					"neutral": "#374151",
					"base-100": "#111827",
					"info": "#0CA6E9",
					"success": "#059669",
					"warning": "#eab308",
					"error": "#ef4444",
				},
			},
			"light", "dark", "corporate", "dracula", "night"],
	}
}
