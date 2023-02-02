<script setup lang="ts">
import Typewriter from '../components/Typewriter.vue';
</script>

<template>
	<section class="Hero site-section sm:relative xl:flex xl:items-center xl:justify-between" id="hero-section">
		<div
			id="content"
			class="px-6 space-y-5 sm:px-11 lg:space-y-8 sm:mt-56 xl:w-3/5 xl:order-first xl:m-0 xl:ml-36 xl:px-0"
		>
			<h1
				id="author-title"
				class="source-code-pro-bold text-4xl text-gray-600 sm:text-5xl lg:text-7xl xl:text-5xl"
			>
				<span id="first-name" class="source-code-pro-black custom-blue">Fahim</span>
				al Emroz
			</h1>

			<Typewriter />

			<div id="action-calls" class="space-x-6">
				<a
					id="cv-download-btn"
					href="https://drive.google.com/uc?id=1izIFQ0DmIW-LU6tZa79Yy25yCDfs6SaD&export=download"
					class="btn-base-styles pointer source-code-pro-bold"
				>
					Download CV</a
				>

				<a
					id="contact-btn"
					class="btn-base-styles pointer source-code-pro-bold border custom-blue"
					href="#contact-section"
					>Contact me</a
				>
			</div>
		</div>
	</section>
</template>

<style>
/* #first-name {
	color: #06b6d4;
}

#contact-btn {
	color: #06b6d4;
} */

#cv-download-btn {
	color: #fff;
	background: linear-gradient(90deg, #51c9bf 2.5%, #06b6d4 100%);
}

.btn-base-styles {
	@apply
	 	inline-block
        py-2
        px-5
        transition
		relative
        lg:text-2xl
        lg:px-7
        lg:py-3;
}

.btn-base-styles::after {
	content: '';
	@apply
		absolute
		w-full
		h-full
		transition
		border
		border-green-300
		left-0
		top-0
}

.btn-base-styles:hover { @apply bottom-2 right-2; }
.btn-base-styles:hover::after { @apply top-2 left-2; }

</style>
