# 项目说明

基于node 实现简单的导航管理系统

>server端：使用node， koa + mongodb
>
>client端：为几个测试页面，用于测试


**mongodb请先安装和启动**
具体配置在 `./config.js`


**项目安装与启动**

```bash
1.安装 依赖
npm i

2.启动项目 【添加了修改自动重启功能】
npm run dev_server
```

默认端口开启2333
本地访问 http://localhost:2333/


生产环境可以使用 pm2发布

全局安装pm2

```bash
npm i -g pm2
```

>记得修改 pm2.json 中的pwd属性为当前项目地址
>
>pm2具体使用方法自行百度
