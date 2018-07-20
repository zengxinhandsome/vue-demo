<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAllChecked">
		</label>
		<span>
			<span>已完成{{completeCount}}</span> / 全部{{totalCount}}
		</span>
		<button v-show="completeCount" @click="deleteCompleteTodos">清除已完成任务</button>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
	computed: {
		...mapGetters(["totalCount", "completeCount"]),
		isAllChecked: {
			get () {
				return this.$store.getters.isAllChecked;
			},
			set (value) {
				// console.log(value);
				this.$store.dispatch("selectAllTodos", value);
			}
		}
	},
	methods: {
		...mapActions(["deleteCompleteTodos"])
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
