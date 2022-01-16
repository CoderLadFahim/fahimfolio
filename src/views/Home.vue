<template>
	<section class="Home">
		<div id="skills-slideshow">
			<img
				v-for="imgSrc in images"
				:key="imgSrc"
				:src="imgSrc"
				:alt="imgSrc"
			/>
		</div>

		<div id="content">
			<h1
				id="author-title"
				class="source-code-pro-bold text-4xl text-gray-600"
			>
				<span id="first-name" class="source-code-pro-black">Fahim</span> al
				Emroz
			</h1>

			<type-writer />

			<div id="action-calls" class="space-x-6">
				<button id="cv" class="btn-base-styles source-code-pro-bold">
					Download CV
				</button>
				<button id="contact" class="btn-base-styles source-code-pro-bold">
					Contact me
				</button>
			</div>
		</div>
	</section>
</template>

<style>
#first-name {
	color: #51c9bf;
}

#contact {
	color: #06b6d4;
}

#cv {
	color: #fff;
	background: linear-gradient(90deg, #51c9bf 2.5%, #06b6d4 100%);
}

.btn-base-styles {
	@apply py-2 px-5 rounded-xl shadow border;
}
</style>

<script>
import Typewriter from '../components/Typewriter.vue';

export default {
	name: 'LandingPage',
	components: {
		'type-writer': Typewriter,
	},
	setup() {
		const images = [
			'/src/assets/TechLogos/React-Logo.png',
			//'/src/assets/TechLogos/JS.png',
			//'/src/assets/TechLogos/figma.png',
			//'/src/assets/TechLogos/Vue-Logo.png',
			//'/src/assets/TechLogos/Tailwind.png',
		];

		return {
			images,
		};
	},
};
</script>
