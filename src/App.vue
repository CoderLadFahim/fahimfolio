<template>
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
