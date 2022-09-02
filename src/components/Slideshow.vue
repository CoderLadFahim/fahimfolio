<template>
	<div
		id="skills-slideshow"
		class="
			w-1/2
			my-36
			mx-auto
			h-52
			transform
			sm:w-auto sm:absolute sm:bottom-14 sm:right-16 sm:scale-90
			md:right-10
			lg:scale-100 lg:right-24 lg:bottom-28
			xl:static xl:w-1/3 xl:order-last xl:m-0
		"
	>
		<img
			:src="images[Math.floor(Math.random() * images.length)]"
			alt=""
			class="rounded-3xl"
		/>
	</div>
</template>

<script setup>
const images = [
	'/src/assets/SlideShowTechLogos/React.png',
	'/src/assets/SlideShowTechLogos/Vue.png',
	'/src/assets/SlideShowTechLogos/Tailwind.png',
];
</script>

<style>
.tech-logo {
	@apply opacity-0;
}

.show {
	opacity: 1;
}
</style>
