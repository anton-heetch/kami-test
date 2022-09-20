<template>
	<div class="wait__for__Load">
		<span class="loader"></span>
	</div>
</template>
<style lang="scss" scoped>
.wait__for__Load {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(#ffffff, 0.8);
}
.loader {
	width: 48px;
	height: 48px;
	display: block;
	margin: 15px auto;
	position: relative;
	color: #fff;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
	content: '';
	box-sizing: border-box;
	position: absolute;
	width: 24px;
	height: 24px;
	top: 0;
	background-color: #2cadfd;
	border-radius: 50%;
	animation: scale50 1s infinite ease-in-out;
}
.loader::before {
	top: auto;
	bottom: 0;
	background-color: #ff3d00;
	animation-delay: 0.5s;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes scale50 {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}
</style>
