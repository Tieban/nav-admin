'use strict'

const Nav = require('../models/nav');

module.exports = {
	/**
	 * 添加新导航
	 */
	async add(ctx, next) {
		let title = ctx.request.body.title.trim()
		let content = ctx.request.body.content.trim()
		let categoryId = ctx.request.body.categoryId
		
		let result = {
			success: false,
			errCode: 0,
		}

		if(!categoryId) {
			result.errCode = -2
			result.errMsg = '导航分类不能为空！'
			ctx.body = result
			return
		}
		if(!title) {
			result.errCode = -3
			result.errMsg = '导航标题不能为空！'
			ctx.body = result
			return
		}
		if(!content) {
			result.errCode = -4
			result.errMsg = '导航内容不能为空！'
			ctx.body = result
			return
		}

		let nav = new Nav({
			title,
			content,
			categoryId
		})

		try {
			//写入数据库
			nav = await nav.save()

			result.success = true
			result.data = nav
			ctx.body = result
		} catch(e) {
			console.log('md,err==', e)
			result.errCode = -1
			result.errMsg = e
			ctx.body = result
			return next
		}
	},

}
