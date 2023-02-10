<template>
	<div class="percentage-scrolled h-1 fixed top-0 left-0 bg-gradient-to-r from-sky-300 to-emerald-300 z-50" :style="{width: percentageScrolled + '%'}"></div>
	<HeroSection />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
	<NavBar />
	<ParallaxBg />
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import ParallaxBg from "./components/ParallaxBg.vue";
// import Cursor from './cursor.vue';
import ContactSection from "./views/Contact.vue";
import HeroSection from "./views/Hero.vue";
import SkillsSection from "./views/Skills.vue";
import ProjectsSection from "./views/Projects.vue";
import { onMounted, ref } from "vue";

const percentageScrolled = ref<number>(0);
onMounted(() => {
	window.addEventListener('scroll', () => {
		const pixelsFromTheTop = +window.scrollY;
		const bodyHeight = +document.querySelector('html').scrollHeight - window.innerHeight;
		percentageScrolled.value = (pixelsFromTheTop / bodyHeight) * 100;
	});
});

</script>

<style>
body {
	@apply bg-gray-100 overflow-x-hidden;
	cursor: url("./assets/cursor.svg"), auto;
}

.site-section {
	/* @apply min-h-screen border border-red-400; */
	@apply min-h-screen mb-24;
}

.pointer {
	cursor: url("./assets/pointer.svg"), auto;
}

.text {
	cursor: url("./assets/text.svg"), auto;
}
</style>
