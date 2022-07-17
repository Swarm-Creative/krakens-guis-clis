/* eslint-disable global-require */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bitterLemon: "#C9DB03",
        brightNavyBlue: "#0077DE",
        rufous: "#A81C07",
        titaniumYellow: "#E6E200",
        errieBlack: "#24250F",
        white: "#f4f5f7",
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        secondary: ["Roboto Condensed", "sans-serif"],
        body: ["Encode Sans", "sans-serif"],
      },
    },
  },
};
