/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#FF9933',  // Deep saffron - traditional Kashmiri color
        'secondary': '#C1272D', // Pomegranate red - matches Chinar leaves
        'background': '#FFF9F5', // Warm off-white
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
      }
    },
    screens: {
      xs:"480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lg2: "1400px",
      xl: "1600px",
      xl2: "1820px",
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        "::-moz-selection": {
          backgroundColor: theme("colors.primary") + "33", // 20% opacity
          color: "#ffffff",
        },
        "::selection": {
          backgroundColor: theme("colors.primary") + "33", // 20% opacity
          color: "#ffffff",
        },
      });
    },
  ],
}
