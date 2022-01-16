<template>
	<div id="input-wrapper" class= "border border-2 border-cyan-300 w-full">
		<label
			:for="idMatcher"
			class="block source-code-pro text-gray-700 opacity-50"
		>
		<span class="label-text">
			{{ labelText }}
		</span>
		</label>

		<input
			class="fira-code-bold outline-none pointer"
			required
			:type="inputType"
			:id="idMatcher"
			:name="idMatcher"
		/>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	labelText: {
		type: String,
		required: true,
	},
	inputType: {
		type: String,
		default: 'text',
	},
	idMatcher: {
		type: String,
		required: true,
	},
});
</script>

<style scoped>
#input-wrapper {
	@apply relative h-14;
}

label {
	@apply absolute border-b-2 top-0 bottom-0 left-0 right-0 pointer-events-none;
}

label span {
	@apply absolute bottom-0;
}

input {
	color: #51c9bf;
	@apply w-full h-full bg-transparent py-0;
}
</style>
