<template>
	<landing-page />
	<nav-bar />
</template>

<script>
import Navbar from './components/navbar.vue';
import LandingPage from './views/LandingPage.vue';

export default {
	name: 'App',
	components: {
		'nav-bar': Navbar,
		'landing-page': LandingPage,
	},
};
</script>

<style>
body {
	@apply bg-gray-100 border border-4 border-blue-600;
	cursor: url('./assets/cursor.svg'), auto;
	min-height: 100vh;
}

.pointer {
	cursor: url('./assets/pointer.svg'), auto;
}

.text {
	cursor: url('./assets/text.svg'), auto;
}
</style>
