<template>
	<section class="Hero sm:relative">
		<Slideshow />

		<div id="content" class="px-6 space-y-5 sm:px-11 mt-44 lg:space-y-8">
			<h1
				id="author-title"
				class="
					source-code-pro-bold
					text-4xl text-gray-600
					sm:text-5xl
					lg:text-7xl
				"
			>
				<span id="first-name" class="source-code-pro-black">Fahim</span>
				al Emroz
			</h1>

			<Typewriter />

			<div id="action-calls" class="space-x-6">
				<button
					id="cv-download-btn"
					@click="cvBtnClickHandler"
					class="btn-base-styles pointer source-code-pro-bold"
				>
					Download CV
				</button>
				<button
					id="contact-btn"
					class="btn-base-styles pointer source-code-pro-bold border"
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
</script>

<style>
#first-name {
	color: #06b6d4;
}

#contact-btn {
	color: #06b6d4;
}

#cv-download-btn {
	color: #fff;
	background: linear-gradient(90deg, #51c9bf 2.5%, #06b6d4 100%);
}

.btn-base-styles {
	@apply py-2 px-5 rounded-xl shadow transform transition ease-out hover:scale-105 lg:text-2xl lg:px-7 lg:py-3 lg:rounded-2xl;
}
</style>
