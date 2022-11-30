module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7E1CFE",

          "secondary": "#96f235",

          "accent": "#c4b5fd",

          "neutral": "#0000",

          "base-100": "#fff",

          "info": "#d1d5db",

          "success": "#10b981",

          "warning": "#fb923c",

          "error": "#E4212E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
