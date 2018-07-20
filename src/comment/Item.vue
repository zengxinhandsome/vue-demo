<template>
	<li>
		<p><span>{{comment.name}}</span><span>说：</span></p>
		<p>{{comment.content}}<span><a href="javascript:" @click="deleteItem">删除</a></span></p>
	</li>				
</template>

<script>
	export default {
		props : {		// 指定属性名和属性值的类型
			comment : Object,
			deleteComment : Function,
			index : Number
		},
		methods : {
			deleteItem () {
				const {comment, deleteComment, index} = this;
				if(window.confirm(`确认删除${comment.name}的评论？`)){
					deleteComment(index);
				}
			}
		}
	}
</script>

<style>
	
</style>