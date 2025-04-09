/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",         // HTML file
    "./src/**/*.{js,jsx,ts,tsx}",  // All your React components
  ],
  theme: {
    extend: {
      screens: {
        'ipad-mini': { min: '768px', max: '819px' },  // only iPad Mini
        'ipad-air': { min: '820px', max: '1023px' },  // only iPad Air
        'ipad-pro': { min: '1024px', max: '1366px' }, // only iPad Pro  // iPad Pro
      },
    },
  },
  plugins: [],
}