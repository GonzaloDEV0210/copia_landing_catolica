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
        '680': '680px',
        '400': '400px',
      },
      height: {
        '2px': '2px',
        '450': '450px',
        '530': '530px',
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

