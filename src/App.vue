<template>
	<img v-if="false" alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />

	<transition appear @before-enter="beforeEnter">
		<h1 class="text-center my-10 text-9xl text-gray-800 font-bold">
			Coming Soon...
		</h1>
	</transition>
</template>

<script>
import gsap from 'gsap';
import HelloWorld from './components/HelloWorld.vue';

export default {
	methods: {
		beforeEnter(el) {
			gsap.from(el.children, {
				scale: 0.6,
				yPercent: 50,
				ease: 'power2.in',
				opacity: 0,
				delay: 1,
				stagger: 0.3,
				duration: 0.3,
			});
		},
	},
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-family: 'Source Code Pro';
}
</style>
