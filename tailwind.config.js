/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html,js}"],
  theme: {
    extend: {
      colors:{
        body: {
          'black': '#000000',
          'blue-custom': '#0C5EFF',
        },
        'content-low': '#B9DCFF',
        'content-high': '#0C5EFF',
        'input-bg': '#FFFFFF26',
        'input-border':'#FFFFFF2E',
        'content-deam':'#FFFFFF8C',
        'checkbox-gradient': '#0000e6',

      },
      opacity: {
        65: '65%',
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/Images/bg_image.png')",
      },
    },
  },
  plugins: [],
}

