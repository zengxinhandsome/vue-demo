// 路由器模块

// 这里将我们需要用到的路由组件映射成路由
// 总结: 编写使用路由的3步
// 1.定义路由组件
// 2.注册路由
// 3.使用路由	router-link		router-view


/*
	向路由组件传递参数的两种形式
		1.通过路由链接,即路由路径携带参数	参数可以是 param  或  query
		2.通过router-view传递props
*/

import Vue from "vue"
import VueRouter from "vue-router"		// 引入vue-router 插件

import About from "../views/Router-basic-about.vue"		// 引入路由组件
import Home from "../views/Router-basic-home.vue"
import News from '../views/Router-basic-news.vue'
import Message from '../views/Router-basic-message.vue'
import MessageDetail from '../views/Router-basic-msgDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes : [
		{
			path : '/about',
			component : About
		},
		{
			path : '/home',
			component : Home,
			children: [			// 配置子路由组件
				{
					// path: '/news',		// 注意：path最左侧的/永远代表跟路径，所以这样写不对
					// path: '/home/news'
					path: "news",			// 也可以这样写，简化写法		
					component: News
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							path: '/home/message/detail/:id',		// 在映射路由的时候需要占位，因为id的值是不确定的
							component: MessageDetail
						}
					]
				},
				{
					path: '',
					redirect: "news"
				}
			]
		},
		{
			path: '/',
			redirect: '/about'
		}
	]
})