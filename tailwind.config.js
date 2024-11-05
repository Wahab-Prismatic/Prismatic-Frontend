/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // container: {
      //   center: true, // Center the container by default
      //   padding: '1rem', // Add padding to the container
      //   screens: {
      //     sm: '100%',      // Full width on small screens
      //     md: '720px',     // Bootstrap 5 medium
      //     lg: '960px',     // Bootstrap 5 large
      //     xl: '1140px',    // Bootstrap 5 extra large
      //     '2xl': '1320px', // Bootstrap 5 extra-extra large
      //   },
      // },
    },
  },
  plugins: [],
}

