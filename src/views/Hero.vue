<script setup lang="ts">
import Typewriter from "../components/Typewriter.vue";
import AppButton from "../components/AppButton.vue";

const cvDownloadLink =
	"https://drive.google.com/uc?id=1izIFQ0DmIW-LU6tZa79Yy25yCDfs6SaD&export=download";
</script>

<template>
	<section class="Hero site-section sm:relative xl:flex xl:items-center xl:justify-between" id="hero-section">
		<div id="content"
			class="px-6 space-y-5 mt-64 text-center sm:px-11 lg:space-y-8 sm:mt-56 xl:w-3/5 xl:order-first xl:m-0 xl:ml-36 xl:px-0 xl:text-start">
			<h1 id="author-title" class="source-code-pro-bold text-4xl text-gray-600 sm:text-5xl lg:text-7xl xl:text-5xl">
				<span id="first-name" class="source-code-pro-black text-sky-400">Fahim</span>
				al Emroz
			</h1>

			<Typewriter />

			<div class="space-x-4">
				<AppButton type="anchor" :href="cvDownloadLink" btn-text="Download CV"
					btn-parent-class="hover:border-sky-400" btn-class="bg-sky-400 border-none text-white" />

				<AppButton type="anchor" btn-text="Contact me" href="#contact-section" />
			</div>
		</div>
	</section>
</template>
