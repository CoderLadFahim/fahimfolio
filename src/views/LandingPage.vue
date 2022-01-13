<template>
	<div id="skills-slideshow"></div>

	<div id="content">
		<h1 id="author-title"><span id="first-name">Fahim</span> al Emroz</h1>

		<type-writer />

		<div id="action-calls">
			<button id="cv">Download CV</button>
			<button id="contact">Contact me</button>
		</div>
	</div>
</template>

<style></style>

<script>
import Typewriter from '../components/Typewriter.vue';

export default {
	name: 'LandingPage',
	components: {
		'type-writer': Typewriter,
	},
};
</script>
