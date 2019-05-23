<template>
	<div class="main container-fluid">
		<div class="row header">
			<video width="320" height="240" controls autoplay>
				<source src="../assets/home/header.mp4" type="video/mp4">
			</video>
			<div></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style scoped>
	*{ border: 1px solid red;}
	.header{ 
		height: 1080px;
		background: url(../assets/home/header.png) no-repeat;
		background-position: center;
		}
</style>
