<template>
	<div>
		<ul>
			<li v-for="msg in msg" :key="msg.id">
				<router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
				<button @click="pushShow(msg.id)">push查看</button>
				<button @click="replaceShow(msg.id)">replace查看</button>
			</li>
		</ul>
		<button @click="$router.back()">back回退</button>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: []
			}
		},
		mounted() {
			// 模拟ajax请求从后台获取数据
			setTimeout(() => {
				const msg = [
					{
						id: 1,
						title: "message001"
					},
					{
						id: 2,
						title: "message002"
					},
					{
						id: 3,
						title: "message003"
					}
				]
				this.msg = msg;
			},500);
		},
		methods: {
			pushShow(id) {
				this.$router.push(`/home/message/detail/${id}`)
			},
			replaceShow(id) {
				this.$router.replace(`/home/message/detail/${id}`);
			}
		}
	}

	// 编程式路由导航
	// 	相关API
	// 	1.this.$router.push(path): 相当于点击路由链接（可以返回当前路由界面）		栈
	// 	2.this.$router.replace(path): 用新路由替换当前路由（不可以返回到路由界面）	队列
	// 	3.this.$router.back(): 请求（返回）上一个记录路由
	// 	4.this.$router.go(-1): 请求（返回）上一个记录路由
</script>