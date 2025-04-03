/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#d46216',
        'secondary': '#e24b5d',
        'background' : '#FDF7F2'
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"]
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

  plugins: [],
}
