<template>
	<div
		id="skills-slideshow"
		class="
			w-1/2
			my-36
			mx-auto
			relative
			h-52
			transform
			sm:absolute sm:bottom-14 sm:right-16 sm:scale-90
			md:right-10
			lg:right-0
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
import { onBeforeMount } from 'vue';

const images = [
	'/src/assets/SlideShowTechLogos/React.png',
	'/src/assets/SlideShowTechLogos/JS.png',
	'/src/assets/SlideShowTechLogos/Figma.png',
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
