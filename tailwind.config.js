/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1040px',
        // => @media (min-width: 1024px) { ... }

        xl: '1294px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        arvo: ['Arvo', 'serif'],
        logo: ['Rubik Vinyl', 'serif'],
        mehubar: ['Satisfy', 'serif'],
        patua: ['Patua One', 'serif'],
        gotic: ['Comic Neue', 'serif'],
      },
    },
  },
  plugins: [],
}
