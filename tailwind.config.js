module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Space Grotesk"','sans-serif'],
     },
     colors:{
      'primary': '#3fff99',
      'primary-light': '#09ed64',
      'primary-dark': '#09c153',
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
