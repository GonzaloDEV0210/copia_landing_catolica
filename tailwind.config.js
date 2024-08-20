/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      width: {
        '106': '106px',
        '121': '121px',
        '360': '360px',
        '450': '450px',
        '550': '550px',
        '600': '600px',
        '680': '680px',
        '750': '750px',
        '850': '850px',
        '400': '400px',
        '1200': '1200px',
        '1470': '1470px',
      },
      height: {
        '2px': '2px',
        '450': '450px',
        '530': '530px',
        '600': '600px',
      },
      maxHeight: {
        '450': '450px'
      },
      boxShadow: {
        'shadow_form': '-1px 2px 14px 0px rgba(255,255,255,1)',
      },
      colors: {
        'yellow_catolica': '#ffbf1f',
        'green_slider_catolica': 'rgba(54,162,188,.7)',
        'boton_aliados': '#36a2bc',
      },
      lineHeight: {
        '18px': '18px',
      },
      fontSize: {
        '24': '24px',
      }
    },
  },
  plugins: [],
}

