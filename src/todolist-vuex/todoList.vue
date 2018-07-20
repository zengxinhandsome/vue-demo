<template>
	<ul class="todo-main">
		<todoItem 
		v-for="(todo, index) in todos"
		:todo="todo"
		:index="index"
		:key="index"/>		
	</ul>
</template>

<script>
import {mapState} from 'vuex'
import todoItem from "./TodoItem.vue"
import storageUtil from '../util/storageUtil.js'

export default {
	computed: {
		...mapState(['todos'])
	},
	watch: {	// 监视todos的所有变化
		todos: {
			deep: true,	// 深度监视
			handler: storageUtil.saveTodos	// 保存todos到localStorage
		}
	},
	components : {
		todoItem
	}
}
</script>

<style>
	
</style>
