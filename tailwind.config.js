/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dynaPuff: ["DynaPuff, cursive"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#67ea88",

          secondary: "#422dc6",

          accent: "#be9ce5",

          neutral: "#332135",

          "base-100": "#FFFFFF",

          info: "#2262E2",

          success: "#1BD0AF",

          warning: "#FAB638",

          error: "#FB132E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
