export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Лесокомбинат',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Проведение археологических работ, проектирование и строительство зданий, инженерные изыскания, продажа спецтехники и строительных материалов. Работаем по всей России. Звоните!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '@/assets/scss/entry.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],
  stylelint: {
    fix: true
  },
  styleResources: {
    scss: ['@/assets/scss/entry.scss']
  },
  fontawesome: {
    icons: {
      solid: ['faPhoneSquare', 'faMap', 'faEnvelope']
      // regular: ['faEnvelope']
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:400,600,700&display=swap'] // Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
