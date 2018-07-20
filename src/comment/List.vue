<template>
	<div class="content">
		<h3>评论回复</h3>
		<p v-show="this.comments.length === 0">当前暂无评论</p>
		<ul>
			<Item 
			v-for="(comment, index) in comments" 
			:key="index" :comment="comment" 
			:deleteComment="deleteComment" 
			:index="index"></Item>
		</ul>
	</div>
</template>

<script>
	import Item from "./Item.vue"
	export default {
		// 声明接受属性 : 这个属性就会成为属性对象的属性
		props : ["comments","deleteComment"],
		components : {
			Item
		}
	}
</script>

<style>
	
</style>