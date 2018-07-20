/*
	vuex的核心管理对象模块：store

	store对象
		1.所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象
		2.属性：
			state：注册的state对象
			getters：注册的getters对象
		3.方法:
			dispatch(actionName, data): 分发调用action
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {	// 初始化状态
	count: 0
}

const mutations = {
	// 增加的mutation
	add(state) {
		state.count++;
	},
	// 减少的mutation
	cut(state) {
		state.count--;
	}
}

const actions = {
	// 增加的action
	increment({commit}) {
		// 提交增加的mutation
		commit("add");
	},
	decrement({commit}) {
		commit("cut");
	},
	// 带条件的action
	incrementIfOdd({commit, state}) {
		if(state.count % 2 === 1){
			commit("add");
		}
	},
	// 异步的action
	incrementAsync({commit}) {
		// 在action中直接就可以执行异步代码
		setTimeout(() => {
			commit("add");
		}, 1000);
	}
}

const getters = {
	evenOrOdd(state) {	// 不需要调用是需要读取属性值，因为读取的时候内部会自动调用get
		return state.count % 2 === 0 ? '偶数' : '奇数';
	}
}

export default new Vuex.Store({
	state, // 状态
	mutations,	// 包含多个更新state函数的对象
	actions, // 包含多个对应事件回调函数的对象
	getters // 包含多个getter计算属性函数的对象
})