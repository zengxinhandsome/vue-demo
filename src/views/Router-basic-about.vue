<template>
	<div>
		<h2>About</h2>
		<p>{{msg}}</p>
		<p>{{msg1}}</p>
		<input type="text">
	</div>
</template>

<script>
	export default {
		props: {
			msg: String,
			msg1: String
		}
	}
</script>

<style>
	
</style>