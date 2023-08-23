/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xlg: "1160px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      grey: "#F5F0EC",
      beige: "#DCC1AB",
      green: "#1B5B31",
      greenHover: "#174f2b",
      black: "#111111",
      font: "rgb(249, 249, 249)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      regular: ["Inter", "sans-serif"],
      medium: ["Montserrat", "sans-serif"],
      extended: ["Bricolage Grotesque", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
