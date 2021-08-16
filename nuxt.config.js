
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  /*
** Router configuration
*/
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },
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
  loading: { color: '#fff' },
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
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-155344033-1'
    }]
  ],
  modules: [
    ['@nuxtjs/axios'],
    ['nuxt-i18n', {
      lazy: true,
      baseUrl: 'https://phuketandamandrones.com',
      seo: true,
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
        },
      ],
      loadLanguagesAsync: true,
      langDir: 'lang/',
      defaultLocale: 'en',
      parsePages: false,
      pages: {
        index: {
          en: '/',
          fr: '/'
        }
      }
    }],
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
