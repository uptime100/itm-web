module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'intimate.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'intimate.io is a cryptocurrency payments solution for the adult industry.' },
      { name: 'image', property: 'og:image', content: '/intimate-banner.png'},
      { name: 'title', property: 'og:title', content: 'intimate.io'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Montserrat'},
    ]
  },
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './index.scss'],
    ['nuxt-mq']
  ],
  'mq': {
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    {
      src: '~plugins/vue-awesome-swiper', ssr: false,
      
    },
    {
      src: '~plugins/mq', ssr: false,
    }

  ],
  generate: {
    subFolders: true
  },
  router: {
    base: '/'
  },
  env: {
    YOUTUBE_KEY: process.env.YOUTUBE_KEY || 'AIzaSyBquv78sj4o__GUKFWUSoRIKL3tZI9Fsbo',
    YOUTUBE_PLAYLIST: process.env.YOUTUBE_PLAYLIST || 'PL8U2rfLlNay3XUE9JHZW2D-cXZXRQX3_X',
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || '29p0okotfprj',
    CONTENTFUL_API: process.env.CONTENTFUL_API || 'https://cdn.contentful.com',
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || 'master',
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || '924dbfe18c87f61190eddd2cce0e9488d60126910cae08f1186487b88ffaff92',
    IPDATA_ICO_KEY: process.env.IPDATA_ICO_KEY || '0d0401e5c6ed758d6910b1643c1cf6d7ad441ce2f6d5e0e2c141d1a0',
    ADD_EVENT_CLIENT: process.env.ADD_EVENT_CLIENT || 'aHXWfhtbjzkCocdGnmuy37752',
    PDF: '/whitepaper',
    YOUTUBE_KEY: 'AIzaSyBquv78sj4o__GUKFWUSoRIKL3tZI9Fsbo',
    YOUTUBE_PLAYLIST: 'PL8U2rfLlNay3XUE9JHZW2D-cXZXRQX3_X',
    TWITTER: 'https://twitter.com/intimatetoken',
    FACEBOOK: 'https://www.facebook.com/intimatetoken/',
    LINKED_IN: 'https://www.linkedin.com/company/intimatetoken/',
    TELEGRAM: 'https://t.me/intimatetoken',
    GITHUB: 'https://github.com/intimatetoken',
    PARTNERS_EMAIL: 'support@intimate.io',
    INTIMATE_API : 'https://dev-api.intimate.partners',
    SERVERLESS_EMAIL: 'https://by17xe4b2a.execute-api.ap-southeast-2.amazonaws.com/dev'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

