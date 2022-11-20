<template>
	<hero-section />
	<skills-section />
	<contact-section />
	<nav-bar />
</template>

<script>
import Navbar from './components/navbar.vue';
import Contact from './views/Contact.vue';
import Hero from './views/Hero.vue';
import SkillsSection from './views/Skills.vue';

export default {
	name: 'App',
	components: {
		'nav-bar': Navbar,
		'hero-section': Hero,
		'contact-section': Contact,
		'skills-section': SkillsSection,
	},
};
</script>

<style>
body {
	@apply bg-gray-100;
	cursor: url('./assets/cursor.svg'), auto;
}
.site-section {
	@apply min-h-screen border border-red-400;
}

.pointer {
	cursor: url('./assets/pointer.svg'), auto;
}

.text {
	cursor: url('./assets/text.svg'), auto;
}
</style>
