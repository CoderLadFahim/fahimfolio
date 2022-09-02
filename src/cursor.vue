<template>
	<svg
		id="cursor"
		class="absolute"
		width="51"
		height="56"
		viewBox="0 0 61 66"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d_302_260)">
			<path
				d="M17.8921 39.8531L21.2166 26.4197L34.5258 22.6284L44.5255 32.2849L41.201 45.7183L27.8918 49.5097L17.8921 39.8531Z"
				stroke="#9CA3AF"
				stroke-width="6"
			/>
			<path
				d="M22.5686 6.56724L33.5753 16.6749L18.5907 20.9717L22.5686 6.56724Z"
				fill="#9CA3AF"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_302_260"
				x="10.5647"
				y="6.56726"
				width="41.2883"
				height="54.3012"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.25 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_302_260"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_302_260"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
</template>

<script setup>
import { onMounted } from 'vue';

// adding the mousemove event handler from the mounted hook
onMounted(() => {
	const cursor = document.getElementById('cursor');

	document.addEventListener('mousemove', (e) => {
		const { pageY, pageX } = e;
		cursor.setAttribute(
			'style',
			`top: ${pageY}px; left: ${pageX}px; transform: translate(-50%, -50%)`
		);
	});
});
</script>

<style></style>
