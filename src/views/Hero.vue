<template>
	<section class="Hero">
		<!-- <div id="skills-slideshow" class="w-1/2 my-36 mx-auto"> -->
		<!-- 	<img -->
		<!-- 		class="w-48 h-44 mx-auto" -->
		<!-- 		v-for="imgSrc in images" -->
		<!-- 		:key="imgSrc" -->
		<!-- 		:src="imgSrc" -->
		<!-- 		:alt="imgSrc" -->
		<!-- 	/> -->
		<!-- </div> -->
		<Slideshow />

		<div id="content" class="px-6 mt-44 space-y-5">
			<h1
				id="author-title"
				class="source-code-pro-bold text-4xl text-gray-600"
			>
				<span id="first-name" class="source-code-pro-black">Fahim</span> al
				Emroz
			</h1>

			<Typewriter />

			<div id="action-calls" class="space-x-6">
				<button
					id="cv-download-btn"
					@click="cvBtnClickHandler"
					class="
						btn-base-styles
						pointer
						source-code-pro-bold
						transition
						ease-out
						transform
						hover:scale-110
					"
				>
					Download CV
				</button>
				<button
					id="contact-btn"
					class="btn-base-styles pointer source-code-pro-bold"
				>
					Contact me
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import Typewriter from '../components/Typewriter.vue';
import Slideshow from '../components/Slideshow.vue';

const cvBtnClickHandler = () => {
	const downloadLink =
		'https://drive.google.com/uc?id=1izIFQ0DmIW-LU6tZa79Yy25yCDfs6SaD&export=download';
	window.open(downloadLink, '_blank');
};

const images = [
	'/src/assets/SlideShowTechLogos/React-Logo.png',
	//'/src/assets/SlideShowTechLogos/JS.png',
	//'/src/assets/SlideShowTechLogos/figma.png',
	//'/src/assets/SlideShowTechLogos/Vue-Logo.png',
	//'/src/assets/SlideShowTechLogos/Tailwind.png',
];
</script>

<style>
#first-name {
	color: #51c9bf;
}

#contact-btn {
	color: #06b6d4;
}

#cv-download-btn {
	color: #fff;
	background: linear-gradient(90deg, #51c9bf 2.5%, #06b6d4 100%);
}

.btn-base-styles {
	@apply py-2 px-5 rounded-xl shadow border;
}
</style>
