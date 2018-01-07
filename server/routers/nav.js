/**
 * restful api 子路由
 * 导航相关
 */

const router = require('koa-router')()
const navController = require('./../controllers/nav')

const common = require('./../controllers/common');

const routers = router
	//新增
	.post('/add', common.isLogin, navController.add)

module.exports = routers