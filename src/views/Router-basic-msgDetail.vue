<template>
	<div>
		<!-- <p>{{$route.params.id}}</p> -->
		<ul>
			<li>id: {{messageDetail.id}}</li>
			<li>title: {{messageDetail.title}}</li>
			<li>content: {{messageDetail.content}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				messageDetail: {}
			}
		},
		mounted() {
			setTimeout(() => {
				const allDetail = [
					{
						id: 1,
						title: "深圳",
						content: "腾讯"
					},
					{
						id: 2,
						title: "杭州",
						content: "阿里巴巴"
					},
					{
						id: 3,
						title: "北京",
						content: "滴滴出行"
					}
				];
				this.allDetail = allDetail;
				const id = +this.$route.params.id;
				this.messageDetail = allDetail.find(detail => detail.id === id); 
			},500)
		},
		watch: {
			$route: function (value) {		// 路由路径（param）发生了改变
				const id = +value.params.id;
				this.messageDetail = this.allDetail.find(detail => detail.id === id); 
			}
		}
	}
</script>

<style>
	
</style>