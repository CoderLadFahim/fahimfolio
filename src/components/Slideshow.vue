<template>
	<div id="skills-slideshow" class="w-1/2 my-36 mx-auto relative border border-green-400 h-52">
		<img
			class="mx-auto absolute"
			v-for="imgSrc in images"
			:key="imgSrc"
			:src="imgSrc"
			:alt="imgSrc"
		/>
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

<style>
.tech-logo {
	@apply opacity-0;
}
</style>
