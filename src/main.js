import Vue from 'vue'
import App from './App.vue'
import AppTodoList from './AppTodoList.vue'
import axiosResource from './axios-resource.vue'
import Axios from './Axios.vue'
import {Button} from 'mint-ui'// 引入mint-ui组件
import router from './router/router-basic.js'
import RouterBasic from './Router-basic.vue'// 引入路由器
import vuexDemo1 from './Vuex-demo1.vue'
// import store from './store/store.js'// 这是Vuex-demo1.vue的
import store from './store/index.js'
import AppTodoListVuex from './AppTodoList-vuex'

// import VueResource from 'vue-resource'// 引入插件

// Vue.use(VueResource)// 声明使用

// import "./todoList/css/base.css"// <AppTodoList/>
import './todolist-vuex/css/base.css'// <AppTodoList/>

Vue.config.productionTip = false

Vue.component(Button.name, Button)// 注册成标签（全局）

new Vue({			// 配置对象的属性名都是一些确定的名称，不能随便修改
  el: '#app',
  components: { App, AppTodoList, axiosResource, Axios, RouterBasic, vuexDemo1, AppTodoListVuex },  // 作用: 将组件映射成标签
  // template: '<App/>'
  template: '<AppTodoList/>',
  // template: '<axiosResource/>'
  // template: '<Axios/>',
  // template: '<RouterBasic/>',
  // template: '<vuexDemo1/>',
  // template: '<AppTodoListVuex/>',
  router,
  // 把store对象提供给"store"选项，这可以把store的实例注入所有的子组建
  store // 所有的组件对象都多了一个属性：$store
})
