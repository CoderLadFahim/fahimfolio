<template>
	<HeroSection />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
	<NavBar />
	<!-- <Cursor /> -->

	<div class="bg absolute top-0 left-0 bottom-0 right-0 border border-teal-500 pointer-events-none -z-10">
		<div class="line w-[1px] absolute top-0 bottom-0 left-[10%] bg-slate-200">
			<svg class="rellax absolute top-20 -left-[28px]" data-rellax-speed="-4" width="56" height="56"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>

		<div class="line w-[1px] absolute top-0 bottom-0 left-[30%] bg-slate-200">
			<svg class="rellax absolute top-56 -left-[48px]" data-rellax-speed="-5" width="96" height="96"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>

		<div class="line w-[1px] absolute top-0 bottom-0 right-[30%] bg-slate-200">
			<svg class="rellax absolute top-56 -left-[48px]" data-rellax-speed="-5" width="96" height="96"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>

		<div class="line w-[1px] absolute top-0 bottom-0 right-[10%] bg-slate-200">
			<svg class="rellax absolute top-56 -left-[48px]" data-rellax-speed="-5" width="96" height="96"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>
	</div>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
// import Cursor from './cursor.vue';
import ContactSection from "./views/Contact.vue";
import HeroSection from "./views/Hero.vue";
import SkillsSection from "./views/Skills.vue";
import ProjectsSection from "./views/Projects.vue";

import Rellax from "rellax";
import { onMounted } from "vue";

onMounted(() => {
	const rellax = new Rellax(".rellax");
});
</script>

<style>
body {
	@apply bg-gray-100 overflow-x-hidden;
	cursor: url("./assets/cursor.svg"), auto;
}

.site-section {
	/* @apply min-h-screen border border-red-400; */
	@apply min-h-screen mb-24;
}

.pointer {
	cursor: url("./assets/pointer.svg"), auto;
}

.text {
	cursor: url("./assets/text.svg"), auto;
}
</style>
