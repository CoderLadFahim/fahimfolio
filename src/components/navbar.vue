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
	@apply border flex shadow justify-between w-11/12 px-4 py-1 rounded-xl fixed left-1/2 bottom-3 transform -translate-x-1/2 bg-white sm:bottom-auto sm:top-3 sm:w-3/5 md:w-1/2 md:py-2 md:px-6 md:rounded-2xl lg:scale-110 lg:top-4 lg:py-3 lg:rounded-2xl xl:flex-col xl:w-16 xl:h-3/5 xl:top-1/2 xl:-translate-y-1/2 xl:left-14 xl:py-8 xl:px-9 2xl:h-3/5;
}

.nav-item.active {
	color: #a5a6f6;
	font-weight: bold;
}

.nav-item {
	@apply text-center text-gray-400 transition duration-200 hover:text-gray-500 xl:flex xl:flex-col xl:items-center xl:gap-2;
}

.nav-item svg {
	@apply w-44 md:transform md:scale-125 xl:scale-150;
}

.nav-item p {
	@apply text-xs;
}
</style>
