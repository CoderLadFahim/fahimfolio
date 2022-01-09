<template>
	<nav
		class="
			border
			flex
			ubuntu-mono
			shadow
			justify-between
			w-11/12
			px-4
			py-1
			rounded-xl
			fixed
			left-1/2
			bottom-3
			transform
			-translate-x-1/2
		"
	>
		<div class="nav-item pointer">
			<font-awesome-icon icon="home" />
			<p>Home</p>
		</div>
		<div class="nav-item pointer">
			<font-awesome-icon icon="code" />
			<p>Skills</p>
		</div>
		<div class="nav-item pointer">
			<font-awesome-icon icon="project-diagram" />
			<p>Project</p>
		</div>
		<div class="nav-item pointer">
			<font-awesome-icon icon="phone" />
			<p>Contact</p>
		</div>
	</nav>
</template>

<script></script>

<style>
.nav-item {
	@apply text-center text-gray-400;
}

.nav-item p {
	@apply text-xs;
}
</style>
