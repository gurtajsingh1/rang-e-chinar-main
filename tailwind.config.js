/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2', // A vibrant blue
        'primary-light': '#A4C8E1', // Light blue for hover states
        'primary-dark': '#003D66', // Darker blue for accents
        'secondary': '#F5A623', // A warm orange
        'secondary-light': '#F8D7A0', // Light orange for hover states
        'secondary-dark': '#C68A1D', // Darker orange for accents
        'accent': '#D0021B', // A strong red for alerts
        'background': '#F9F9F9', // Light background color
        'text': '#333', // Dark text color for readability
        'muted': '#B0B0B0', // Muted gray for less important text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font
        serif: ['Merriweather', 'serif'], // Classic serif font for headings
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem', // Additional spacing utility
      },
      boxShadow: {
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem', // Additional border radius for larger elements
      },
    },
    screens: {
      xs: "480px",
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
