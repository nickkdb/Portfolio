module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lightgreen": "#7ed56f",
        "mediumgreen": "#55c57a",
        "darkgreen": "#28b485",
        "gray-777": '#777',
        "off-gray": '#abb8c3',
        "off-white": 'rgba(241, 245, 249)'
      },
      fontSize: {
        '16px/28px': ['1rem, 1.75'],
      },
      fontFamily: {
        'hind': 'Hind, sans-serif'
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/8': '12.5%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '9/16': '56.25%',
        '4/3': '133.33333%',
        '16/9': '177.77778%',
        'full': '100%',
        '75vh': '50vh'        
      },
      letterSpacing: {
        '12':'2.25rem',
        '4.5': '1.125rem',
        '2': '0.5rem'
      },
      backgroundImage: theme => ({
        'hero-img': "linear-gradient(to right bottom, #15287c, #0dccf2)"
      }),
      keyframes: {
        moveInLeft: {
          '0%': {
              opacity: '0',
              transform: 'translateX(-6.25rem)'
          },
          '70%': {
            transform: 'translateX(1rem)'
          },
          '100%': {
              opacity: '1',
              transform: 'translate(0)'
          }
        },
        moveInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(6.25rem)'
        },
          '70%': {
            transform: 'translateX(-1rem)'
          },
        '100%': {
            opacity: '1',
            transform: 'translate(0)'
        }
        },
        moveInBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(3rem)'
        },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
        }
        }
      },
      animation: {
        'moveInLeft': 'moveInLeft 1.5s',
        'moveInRight': 'moveInRight 1.5s',
        'moveInBottom': 'moveInBottom .5s ease-out .75s 1 normal backwards'
      }
    },
  },
  plugins: [],
}
