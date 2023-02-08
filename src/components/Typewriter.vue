<script setup lang="ts">
import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
	const strings: string[] = [
		`<span style="color: #61DAFB;">React</span> developer.`,
		`<span class="text-yellow-500">Javascript</span> specialist.`,
		// `<span class="text-red-400">UIUX</span> designer.`,
		`<span style="color: #41b883;">Vue</span> developer.`,
		`<span class="text-sm sm:text-xl lg:text-3xl"><span style="color: #37678f;">Pyt</span><span style="color: #f6bc31">hon</span> enthusiast.</span>`,
		`<span class="text-sm sm:text-xl lg:text-3xl">certified <span class="fira-code-bold text-gray-700">Frontend Engineer</span>.</span>`,
	];

	const typed = new Typed('#type', {
		strings,
		typeSpeed: 20,
		smartBackspace: true,
		loop: true,
		cursorChar: `<span class="text-gray-400">█</span>`,
	});
});
</script>

<template>
	<h1 class="fira-code-medium text-gray-600 text-lg sm:text-xl lg:text-3xl">
		I am a <span id="type"></span>
	</h1>
</template>


