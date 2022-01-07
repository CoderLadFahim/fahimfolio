<template>
	<div id="cursor" class="w-4 h-8 rounded bg-red-300 shadow absolute"></div>
</template>

<script>
import gsap from 'gsap';
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'App',
	setup() {},
	mounted() {
		const cursor = document.querySelector('#cursor');
		document.addEventListener('mousemove', ({ pageX, pageY }) => {
			cursor.setAttribute(
				'style',
				`top: ${pageY}px; left: ${pageX}px; transform: translate(-50%, -50%);`
			);
		});
	},
};
</script>

<style>
#cursor {
	transition: 100ms;
}
</style>
