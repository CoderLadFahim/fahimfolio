<template>
	<HeroSection />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
	<NavBar />
	<!-- <Cursor /> -->
</template>

<script lang="ts" setup>
import NavBar from './components/navbar.vue';
// import Cursor from './cursor.vue';
import ContactSection from './views/Contact.vue';
import HeroSection from './views/Hero.vue';
import SkillsSection from './views/Skills.vue';
import ProjectsSection from './views/Projects.vue';
</script>

<style>
body {
	@apply bg-gray-100 overflow-x-hidden;
	cursor: url('./assets/cursor.svg'), auto;
}

.site-section {
	/* @apply min-h-screen border border-red-400; */
	@apply min-h-screen;
}

.pointer {
	cursor: url('./assets/pointer.svg'), auto;
}

.text {
	cursor: url('./assets/text.svg'), auto;
}
</style>
