<template>
	<button class="delete__btn" type="button">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48px"
			height="48px"
			viewBox="0 0 48 48"
		>
			<path
				d="M2,47a0.5,0.5,0,0,1-.35-0.85l45-45a0.5,0.5,0,0,1,.71.71l-45,45A0.5,0.5,0,0,1,1.5,47Z"
			/>
			<path
				d="M47.5,47a0.5,0.5,0,0,1-.35-0.15l-45-45a0.5,0.5,0,0,1,.71-0.71l45,45A0.5,0.5,0,0,1,46.5,47Z"
			/>
			<rect width="48" height="48" fill="none" />
		</svg>
	</button>
</template>
<style lang="scss" scoped>
.delete__btn {
	width: 24px;
	height: 24px;
	background: #ff9898;

	position: absolute;
	right: 0;
	top: 0;
	margin: 0;
	padding: 0;
	font-size: 0;
	border: none;
	outline: none;

	svg {
		width: 100%;
		height: 100%;
		fill: black;
		padding: 4px;
	}
}
</style>
