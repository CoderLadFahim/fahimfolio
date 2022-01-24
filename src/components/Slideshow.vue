<template>
	<div id="skills-slideshow" class="w-1/2 my-36 mx-auto relative">
		<img :src="images[Math.floor(Math.random() * images.length)]" alt="" />
	</div>
</template>

<script setup>
const images = [
	'/src/assets/SlideShowTechLogos/React.png',
	'/src/assets/SlideShowTechLogos/JS.png',
	'/src/assets/SlideShowTechLogos/Figma.png',
	'/src/assets/SlideShowTechLogos/Vue.png',
	'/src/assets/SlideShowTechLogos/Tailwind.png',
];
</script>
