module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Roboto"','sans-serif'],
     },
     colors:{
      'primary': '#c7ef00',
      'primary-light': '#FCF1D3',
      'primary-dark': '#C59F85',
      'dark': '#171717',
      'dark100': '#212124',
      'light': '#ffff',
     },

    backgroundColor: theme => ({
     ...theme('colors'),
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#D9BC92',
      'primary-light': '#FCF1D3',
      'primary-dark': '#C59F85',
     }),


     textColor: theme => theme('colors'),
     textColor: {
      'primary': '#D9BC92',
      'primary-light': '#FCF1D3',
      'primary-dark': '#C59F85',
      'light': '#ffff',
      'dark': '#171717',
     }
  },

  variants: {
    extend: {},
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/assets/favicon.svg',
        appName: 'Plusvalica',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}
