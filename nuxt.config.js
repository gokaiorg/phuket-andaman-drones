
export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/jsonld',
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false },
    { src: '~/plugins/aos', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-XXX'
    // }]
  ],
  modules: [
    ['@nuxtjs/axios'],
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'https://phuketandamandrones.com',
        locales: [
          {
            name: 'FR',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          },
          {
            name: 'EN',
            code: 'en',
            iso: 'en-EN',
            file: 'en-EN.js'
          }
        ],
        loadLanguagesAsync: true,
        langDir: 'lang/',
        defaultLocale: 'en'
      }
    ],
    ['@nuxtjs/robots', {
      UserAgent: '*'
    }],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://phuketandamandrones.com',
    gzip: true,
    routes: [
      '/',
      {
        url: '/',
        changefreq: 'monthly',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
