/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        whitea: 'hsla(0, 0%, 100%,.3)',
      },
      fontSize: {
        body: '18px',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontWeight: {
        normal: 600,
        bold: 700,
        extrabold: 900,
      },
      screens: {
        tablet: '700px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
