/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sourceSerifPro: ['Source Serif Pro', 'serif'],
      },

      colors: {
        primary: {
          headingColor: '#853036',
          subHeading: '#B21B1B',
          btnColor: '#F38500',
        },
        secondary: {
          activedots: '#853036',
          nonactivedots: '#D9D9D9',
          detailsBackground: '#FFF0E180',
          footerBg: '#4A070A',
        },
      },
    },
  },
  plugins: [],
};
