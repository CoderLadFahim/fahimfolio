<template>
	<h1 class="fira-code-medium text-gray-600 text-lg sm:text-xl">
		I am a <span id="type"></span>
	</h1>
</template>

<script>
import { onMounted } from 'vue';
import Typed from 'typed.js';

export default {
	name: 'Typewriter',
	setup() {
		onMounted(() => {
			const strings = [
				`<span style="color: #61DAFB;">React</span> developer.`,
				`<span class="text-yellow-500">Javascript</span> specialist.`,
				`<span class="text-red-400">UIUX</span> designer.`,
				`<span style="color: #41b883;">Vue</span> developer.`,
				`<span class="text-sm sm:text-xl"><span style="color: #37678f;">Pyt</span><span style="color: #f6bc31">hon</span> and <span style="color: #687ab2;">PHP</span> enthusiast.</span>`,
				`<span class="text-sm sm:text-xl">certified <span class="fira-code-bold text-gray-700">Frontend Engineer</span>.</span>`,
			];

			const typed = new Typed('#type', {
				strings,
				typeSpeed: 20,
				smartBackspace: true,
				loop: true,
				cursorChar: `<span class="text-gray-400">█</span>`,
			});
		});
	},
};
</script>
