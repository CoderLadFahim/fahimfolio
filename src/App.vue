<template>
	<img v-if="false" alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />

	<transition appear @before-enter="beforeEnter">
		<div id="buttons w-1/3 my-0 mx-auto text-center">
			<button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys
			</button>
			<button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys</button
			><button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys</button
			><button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys</button
			><button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys</button
			><button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys</button
			><button
				class="
					block
					bg-green-500
					font-bold
					text-white
					py-2
					px-4
					mb-2
					rounded-2xl
					shadow
				"
			>
				Inky pinkies per donkey monkeys
			</button>
		</div>
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
