<template>
	<div>
		<!-- <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p> -->
		<p>click {{count}} times, count is {{evenOrOdd}}</p>	<!-- 这是简化写法 -->
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default {
		computed: {
			// evenOrOdd() {
			// 	// 这里需要注意的是：在js里面写和在模版里面写是不一样的，在模版里面写不需要this，在js里面写需要加this
			// 	// this也就是组件对象
			// 	return this.$store.getters.evenOrOdd;
			// }

			// mapState()返回值：{count() {return this.$store.state["count"]}}
			...mapState(["count"]),		// 映射count 为 store.state.count	
			// mapGetters()返回值：{evenOrOdd() {return this.$store["evenOrOdd"]}}
			...mapGetters(["evenOrOdd"])
		},
		methods: {
			...mapActions(["increment", "decrement", "incrementIfOdd", "incrementAsync"])
		}
		// methods: {
		// 	increment() {
		// 		// 通知vuex去增加
		// 		this.$store.dispatch("increment"); // 触发store中对应的action调用
		// 	},
		// 	decrement() {
		// 		this.$store.dispatch("decrement");
		// 	},
		// 	incrementIfOdd() {
		// 		this.$store.dispatch("incrementIfOdd");
		// 	},
		// 	incrementAsync() {
		// 		this.$store.dispatch("incrementAsync");
		// 	}
		// }
	}

	/*
		多组件共享状态的问题
			1.多个视图依赖于同一状态
			2.来自不同视图的行为需要变更同一状态
			3.以前的解决办法
				a.将数据以及操作数据的行为都定义在父组件
				b.将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
			4.vuex就是用来解决这个问题的
	*/

	/*
		vuex核心概念和API
			1.state
				(1) vuex管理的状态对象
				(2) 它应该是唯一的
						const state = {
							xxx: initValue
						}
			2.mutations
				(1) 包含多个直接更新state的方法(回调函数)的对象
				(2) 谁来触发：action中的commit("mutation名称")
				(3)	只能包含同步的代码，不能写异步代码
						const mutations = {
							yyy(state, data) {
								// 更新state的某个属性
							}
						}
			3.actions
				(1) 包含多个事件回调函数的对象
				(2) 通过执行:commit()来触发mutation的调用，间接更新state
				(3) 谁来触发：组件中: $state.dispatch("action名称")	// "zzz"
				(4) 可以包含异步代码(定时器，ajax)
						const actions = {
							zzz({commit, state}) {
								commit('yyy', data2);
							}
						}
			4.getters
				(1) 包含多个计算属性(get)的对象
				(2) 谁来读取：组件中: $state.getter.xxx
						const getters = {
							mmm(state) {
								return ...
							}
						}
			5.module
				(1) 包含多个module
				(2) 一个module是一个store的配置对象
				(3) 与一个组件(包含有共享数据)对应


			向外暴露store对象
				export default new Vuex.store({
					state,
					mutations.
					actions,
					getters
				})
	*/
</script>

<style>
	
</style>