module.exports = {
  content: [
    './src/pages/**/*.js',
    './src/components/**/*.js',
  ],

  theme: {
    fontFamily: {
      'body': 'Fira Sans',
     },
     colors:{
      'primary': '#3fff99',
      'primary-light': '#35ff82',
      'primary-dark': '#09c153',
      'dark': '#171717',
      'dark100': '#212124',
      'light': '#f9f7f7',
     },

    backgroundColor: theme => ({
     ...theme('colors'),
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
     }),

     textColor: theme => theme('colors'),
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
