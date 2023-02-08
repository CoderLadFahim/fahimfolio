<script setup lang="ts">
import Rellax from "rellax";
import { onMounted } from "vue";

onMounted(() => {
	const rellax = new Rellax(".rellax");
});
</script>


<template>
	<div class="bg absolute top-0 left-0 bottom-0 right-0 border border-teal-500 pointer-events-none -z-10">
		<!-- first column -->
		<div class="line w-[1px] absolute top-0 bottom-0 left-[10%] bg-slate-200 hidden">
			<svg class="rellax absolute top-20 -left-[28px]" data-rellax-speed="-4" width="56" height="56"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>

		<!-- second column -->
		<div class="line w-[1px] absolute top-0 bottom-0 left-[30%] bg-slate-200">
			<svg class="rellax absolute top-24 -left-[28px]" data-rellax-speed="-6" width="56" height="56"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="fill-green-200" x="-2.56836" y="54" width="80" height="80" rx="8"
					transform="rotate(-45 -2.56836 54)" />
			</svg>

			<svg class="rellax absolute top-96 -left-[28px]" data-rellax-speed="-3" width="56" height="56"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="fill-sky-200" x="-2.56836" y="54" width="80" height="80" rx="8"
					transform="rotate(-45 -2.56836 54)" />
			</svg>
		</div>

		<!-- third column -->
		<div class="line w-[1px] absolute top-0 bottom-0 right-[30%] bg-slate-200">
			<svg class="rellax absolute top-56 -left-[48px]" data-rellax-speed="-5" width="96" height="96"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="fill-teal-200" x="-2.56836" y="54" width="80" height="80" rx="8"
					transform="rotate(-45 -2.56836 54)" />
			</svg>

			<svg class="rellax absolute top-[35rem] -left-[24px]" data-rellax-speed="2" width="48" height="48"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect class="fill-red-200" x="-2.56836" y="54" width="80" height="80" rx="8"
					transform="rotate(-45 -2.56836 54)" />
			</svg>
		</div>

		<!-- fourth column -->
		<div class="line w-[1px] absolute top-0 bottom-0 right-[10%] bg-slate-200 hidden">
			<svg class="rellax absolute top-56 -left-[48px]" data-rellax-speed="-5" width="96" height="96"
				viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="-2.56836" y="54" width="80" height="80" rx="8" transform="rotate(-45 -2.56836 54)"
					fill="#06B6D4" />
			</svg>
		</div>
	</div>
</template>
