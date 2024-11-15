/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00ff9d',
            dark: '#00cc7d',
          },
          secondary: {
            DEFAULT: '#1a1f2c',
            light: '#2a2f3c',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  };