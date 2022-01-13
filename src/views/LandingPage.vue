<template>
	<div id="skills-slideshow"></div>

	<div id="content">
		<h1 id="author-title" class="source-code-pro-bold text-4xl text-gray-600"><span id="first-name" class="source-code-pro-black">Fahim</span> al Emroz</h1>

		<type-writer />

		<div id="action-calls">
			<button id="cv">Download CV</button>
			<button id="contact">Contact me</button>
		</div>
	</div>
</template>

<style>
#first-name {
	color: #51c9bf;
}
</style>

<script>
import Typewriter from '../components/Typewriter.vue';

export default {
	name: 'LandingPage',
	components: {
		'type-writer': Typewriter,
	},
};
</script>
