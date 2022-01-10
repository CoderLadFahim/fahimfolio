<template>
	<nav class="nav-styles ubuntu-mono">
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
			<p>Projects</p>
		</div>
		<div class="nav-item pointer">
			<font-awesome-icon icon="phone" />
			<p>Contact</p>
		</div>
	</nav>
</template>

<script></script>

<style>
.nav-styles {
	@apply border flex shadow justify-between w-11/12 px-4 py-1 rounded-xl fixed left-1/2 bottom-3 transform -translate-x-1/2 bg-white sm:bottom-auto sm:top-3 sm:w-3/5 md:w-1/2 md:py-2 md:px-6 md:rounded-2xl lg:scale-110 lg:top-4 lg:py-3 lg:rounded-2xl xl:rotate-90 xl:translate-x-0 xl:py-2 xl:top-1/2 xl:left-12 xl:-translate-x-1/2;
}

.active {
	color: #a5a6f6 !important;
	font-weight: bold;
}

.nav-item {
	@apply text-center text-gray-400 xl:transform xl:-rotate-90 md:inline-block md:transform md:scale-125;
}

.nav-item svg {
	@apply w-44;
}

.nav-item p {
	@apply text-xs;
}
</style>
