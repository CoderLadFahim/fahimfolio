<template>
	<Navbar />
</template>

<script>
import { onMounted } from 'vue';
import Navbar from './components/navbar.vue';
import Typed from 'typed.js';

export default {
	name: 'App',
	components: { Navbar },
	setup() {
		onMounted(() => {
			console.dir(Typed);
		});
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
