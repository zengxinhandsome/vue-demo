<template>
	<ul class="todo-main">
		<!-- <todoItem 
		v-for="(todo, index) in todos"
		:todo="todo"
		:index="index"
		:key="index"
		:removeTodo="removeTodo"/> -->

		<todoItem 
		v-for="(todo, index) in todos"
		:todo="todo"
		:index="index"
		:key="index"/>		<!-- 这里通过PubSub实现组件通信 -->
	</ul>
</template>

<script>
import todoItem from "./TodoItem.vue"
export default {
	props : {
		todos : {
			type : Array
		},
		// removeTodo : {
		// 	type : Function
		// }
	},
	components : {
		todoItem
	}
}
</script>

<style>
	
</style>
