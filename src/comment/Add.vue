<template>
	<div class="add">
		<p>用户名：<input type="text" placeholder="用户名" v-model="name"></p>
		<p>评论内容：<input type="text" placeholder="评论内容" v-model="content"></p>
		<input type="button" value="提交" @click="add">
	</div>
</template>

<script>
	export default {
		props : {
			addComment : {
				type : Function,
				required : true
			}
		},
		data () {
			return {
				name : "",
				content : ""
			}
		},
		methods : {
			add () {
				 // 1.检查输入的合法性
				 const name = this.name.trim();
				 const content = this.content.trim();
				 if(!name || !content){
				 	alert("姓名和内容不得为空！")
				 	return;
				 }
				 // 2.根据输入的数据，封装成一个comment对象
				 const comment = {
				 	name : name,
				 	content : content
				 }
				 // 3.添加到comments中
				 this.addComment(comment);
				 this.name = "";
				 this.content = "";
			}
		}
	}
</script>

<style>
	
</style>