<template>
	<li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{backgroundColor : bgColor}">
		<label>
			<input type="checkbox" v-model="todo.complete"> 
			<span>{{ todo.title }}</span>
		</label>
		<button class="btn btn-danger" v-show="isShow" @click="deleteItem(index)">删除</button>
	</li>
</template>

<script>
import PubSub from "pubsub-js"
export default {
	data () {
		return {
			bgColor : "#fff",
			isShow : false
		}
	},
	methods : {
		handleEnter (isEnter) {
			if(isEnter) {
				this.bgColor = "#ddd";
				this.isShow = true;
			}else {
				this.bgColor = "#fff";
				this.isShow = false;
			}
		},
		deleteItem () {
			const {todo, index, removeTodo} = this;
			if(window.confirm(`确定删除${todo.title}吗？`)){
				// removeTodo(index);	
				// 发布消息
				PubSub.publish("removeTodo", index);
			}
		}
	},
	props : {
		todo : {
			type : Object
		},
		index : {
			type : Number
		},
		// removeTodo : {
		// 	type : Function
		// }
	}
}
</script>

<style>
	.todo-main {
		padding: 0;
	}
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}
	li label {
		cursor: pointer;
	}
	li label input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}
	li .btn {
		border: none;
		float: right;
		margin-top: 3px
	}
	li:last-child {
		border-bottom: none;
	}
</style>
