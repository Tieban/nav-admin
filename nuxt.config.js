module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: '导航系统',
		meta: [{
				charset: 'utf-8'
			},
//			{
//				name: 'viewport',
//				content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
//			},
			//{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
//		script: [{
//				src: 'https://g.alicdn.com/mtb/??lib-flexible/0.3.2/flexible_css.js,lib-flexible/0.3.2/flexible.js'
//			},
//			
//		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	css: [],
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#ffe600'
	},
	/*
	 ** Build configuration
	 */
	build: {
		vendor: ['axios'],
		/*
		 ** Run ESLint on save
		 */
		//  extend (config, { isDev, isClient }) {
		//    if (isDev && isClient) {
		//      config.module.rules.push({
		//        enforce: 'pre',
		//        test: /\.(js|vue)$/,
		//        loader: 'eslint-loader',
		//        exclude: /(node_modules)/
		//      })
		//    }
		//  }
	},
//	axios: {
//		baseURL: 'http://vueh5.xueshanshan.top',
//		credentials: false,
//		proxyHeaders: false
//	},
	postcss: function() {
		return [px2rem({
			remUnit: 75
		})];
	},
	modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
	plugins: ['~/plugins/filters.js']
}