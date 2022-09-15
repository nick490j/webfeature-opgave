/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-1': "url('/img/sh-skidt1.jpg')",
        'hero-2': "url('/img/sh1.jpg')",
        'carosel': "url('/img/lomo-smena-17.jpg')",
        'skew-bg': "url('/img/background-100.jpg')",
        'mobile-bg': "url('/img/mobile-bg-100.jpg')",
      },
      colors:{
        'quote-red': '#D94436',
        'bage': '#D9D3B6',
        'mustartd': '#8C773C'
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};


