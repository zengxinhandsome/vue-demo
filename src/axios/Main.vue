<template>
	<div class="main">
		<h2 v-if="firstView">请输入用户名搜索</h2>
		<h2 v-if="loading">loading...</h2>
		<h2 v-if="errorMsg">{{ errorMsg }}</h2>
		<div class="card" v-for="(user, index) in users" :key="index">
			<a :href="user.url" target="_blank">
				<img :src="user.avatar_url">
			</a>
			<p>{{ user.name }}</p>
		</div>
	</div>
</template>

<script>
import PubSub from "pubsub-js"
import axios from "axios"
	export default {
		data () {
			return {
				firstView : true,
				loading : false,
				errorMsg : "",
				users : null 		// [{url, avatar_url, name}]
			}
		},
		mounted () {
			// 订阅搜索的消息
			PubSub.subscribe("search", (msg, searchName) => {	// 说明需要发ajax请求进行搜索
				const url = `https://api.github.com/search/users?q=${searchName}`;

				// 更新状态(请求中)
				this.firstView = false;
				this.loading = true;

				// 发ajax请求

				axios.get(url).then(response => {
					const result = response.data;
					const users = result.items.map(item => ({
						url : item.html_url,
						avatar_url : item.avatar_url,
						name : item.login
					}));
					// 成功：更新状态
					this.loading = false;
					this.users = users;
				}).catch(error => {
					// 失败，更新状态
					this.loading = false;
					this.errorMsg = "请求失败";
				});
				this.users = null;
			})
		}
	}
</script>

<style>
	.main {
		margin: 0 auto;
		width: 80%;
		background: #ddd;	
		padding: 50px 40px;
	}
	.main::after {
		content: "";
		display: block;
		clear : both;
	}
	.main a {
		display: inline-block;
		margin-top: 20px;
		vertical-align: -44px;
	}
	.main .card a img {
		width: 100px;
	}
	.card {
		width: 150px;
		height: 200px;
		float: left;
		text-align: center;
	}
	.card p {
		text-align: center;
	}
	
</style>