module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Roboto"','sans-serif'],
     },
     colors:{
      'primary': '#05B6D3',
      'primary-light': '#5ee9ff',
      'primary-dark': '#0ba5bc',
      'dark': '#171717',
      'dark100': '#212124',
      'light': '#ffff',
     },

    backgroundColor: theme => ({
     ...theme('colors'),
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
     }),

     textColor: theme => theme('colors'),
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
