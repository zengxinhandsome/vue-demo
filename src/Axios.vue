<template>
	<div class="container">
		<Search/>
		<usersMain/>
		<mt-button @click.native="test" type="primary">click me</mt-button>
	</div>
</template>

<script>
	import Search from "./axios/Search.vue"
	import Main from "./axios/Main.vue"
	import {Toast} from "mint-ui"			// 引入mint-ui	组件

	export default {
		components : {
			Search,
			"usersMain" : Main
		},
		methods : {
			test () {
				Toast("提示信息!");
			}
		}
	}
</script>

<style>
	
</style>