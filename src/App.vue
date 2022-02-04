<template>
	<hero-section />
	<contact-section />
	<nav-bar />
</template>

<script>
import Navbar from './components/navbar.vue';
import Contact from './views/Contact.vue';
import Hero from './views/Hero.vue';

export default {
	name: 'App',
	components: {
		'nav-bar': Navbar,
		'hero-section': Hero,
		'contact-section': Contact,
	},
};
</script>

<style>
body {
	@apply bg-gray-100;
	cursor: url('./assets/cursor.svg'), auto;
}
body section {
	@apply h-screen border border-4 border-blue-600;
}

.pointer {
	cursor: url('./assets/pointer.svg'), auto;
}

.text {
	cursor: url('./assets/text.svg'), auto;
}
</style>
