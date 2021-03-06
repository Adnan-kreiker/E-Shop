require("dotenv").config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "myShop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "E-Commerce shop for Gamers and tech enthusiasts",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "preload",
        as: "image",
        href: "/bg11.webp",
      },
      {
        rel: "preload",
        as: "image",
        href: "/bg22.webp",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://cdn.snipcart.com/themes/v3.0/default/snipcart.css",
      },

      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/swiper.js", mode: "client" },
    { src: "~/plugins/vuexPersist", mode: "client" },
    {
      src: "~/plugins/scroll.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  eslint: {
    cache: false,
  },

  buildDir: "dist",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",

    // '@nuxtjs/tailwindcss',

    [
      "nuxt-compress",
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],

    "@nuxt/postcss8",

    "@nuxtjs/vuetify",

    "@nuxtjs/snipcart",
  ],

  googleFonts: {
    families: {
      Inter: {
        wght: [500, 700],
      },
      // "Inter+sans-serif": true,
    },
    display: "swap",
    // preconnect: true,
    preload: true,
  },

  snipcart: {
    key: process.env.SNIPCART,
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxt/image",

    "@nuxtjs/apollo",

    "@nuxtjs/dotenv",
  ],

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/djwgtizi3/image/upload/",
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_API_URL + "graphql",
      },
    },
    // defaultOptions: {
    //   // See 'apollo' definition
    //   // For example: default query options
    //   $query: {
    //     loadingKey: "loading",
    //     fetchPolicy: "cache-and-network",
    //   },
    // },
  },

  loading: {
    color: "#a82514",
    height: "3px",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    name: "geeks-eshop",
    theme_color: "#a82514",
    display: "fullscreen",
    icon: {
      fileName: "favicon.png",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "css-byebye": {
          rulesToRemove: [
            /.*\.v-application--is-rtl.*/,
            // /.*\.theme--light.*/,
            // /.*\.theme--dark.*/,
            // /.*\.v-progress.*/,
            /.*\rtl.*/,
            /@keyframes*\rtl.*/,
            /@-webkit*\rtl.*/,
            // /.*\.v-icon.*/,
            /.*\.elevation.*/,
            /.*\.scroll.*/,
            /.*\.slide.*/,
            // /.*\.dialog.*/,
            // /.*\.v-image.*/,
            // /.*\.v-window.*/,
          ],
        },
      },
    },
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
}
