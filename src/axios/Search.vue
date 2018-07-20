<template>
	<div class="search">
		<h1>Search Github Users</h1>
		<input type="text" placeholder="enter the name you search" v-model="searchName">
		<button @click="search">search</button>
	</div>
</template>

<script>
import PubSub from "pubsub-js"
	export default {
		data () {
			return {
				searchName : ""
			}
		},
		methods : {
			search () {
				const searchName = this.searchName.trim();
				if(searchName) {
					// 发布搜索的消息
					PubSub.publish("search", searchName);

					// 绑定事件监听 ：订阅消息
      				// 触发事件 ： 发布消息
				}
			}
		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
	h1 {
		margin: 0;
	}
	.search {
		width: 80%;
		margin: 0 auto;
		background: #aaa;
		padding: 50px 40px;
	}
	.search input {
		margin-top: 40px;
		height: 20px;
	}
</style>