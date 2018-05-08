importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b545c424cd42ea926d67.js",
    "revision": "27fbcafb6bbddba2896161f43eff78b0"
  },
  {
    "url": "/_nuxt/layouts/default.97431eacd86b6b3353a3.js",
    "revision": "0e11652f6120e7b675add7c5ab6aa8d8"
  },
  {
    "url": "/_nuxt/manifest.504318e7e2419b0300f1.js",
    "revision": "8c532cebad43a8f1238d772f70e833fd"
  },
  {
    "url": "/_nuxt/pages/act/index.7d69a78f2b3537fb9f72.js",
    "revision": "54b08c1bf0a0d3bf6c25a0b69a5894c9"
  },
  {
    "url": "/_nuxt/pages/index.7d80c3e77fae587417c7.js",
    "revision": "a063237edcbb6e1fd82429f3649302a5"
  },
  {
    "url": "/_nuxt/pages/login.118e9d7cad7d5eab9964.js",
    "revision": "8962f1924deba1d3c71e59cd72635e55"
  },
  {
    "url": "/_nuxt/pages/main.19c610749eb7058e6cbe.js",
    "revision": "8fa814c2969ef55c6bc260d93ebe38f3"
  },
  {
    "url": "/_nuxt/pages/option.fb9944146a45e27d7f4d.js",
    "revision": "d8a1b7d0131ebe7a3eb4ed5d33c73423"
  },
  {
    "url": "/_nuxt/vendor.c43180fbeda239a9a7a9.js",
    "revision": "220c09dc33eb72884dc01335d37e08c0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

