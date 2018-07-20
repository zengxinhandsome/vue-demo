<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAllChecked">
		</label>
		<span>
			<span>已完成{{completeSize}}</span> / 全部{{todos.length}}
		</span>
		<button v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	props : {
	    todos: Array,
		deleteCompleteTodos: Function,
		selectAllTodos: Function
	},
	computed: {
		completeSize () {
			// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
			return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0);
		},
		isAllChecked: {
			get () {
				return this.todos.length === this.completeSize && this.todos.length > 0;
			},
			set (value) {
				this.selectAllTodos(value);
			}
		}
	}
}
</script>

<style>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}
	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
	}
	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.todo-footer button {
		border: 2px solid #bd362f;
		color: #fff;
		height: 30px;
		line-height: 30px;
		background: #bd362f;
		float: right;
		margin-top: 5px;
		outline: none;
		cursor: pointer;
		border-radius: 4px;
	}
</style>
