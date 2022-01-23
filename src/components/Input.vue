<template>
	<div id="input-wrapper" class="w-full">
		<input
			class="fira-code-bold outline-none text"
			required
			v-model="userInput"
			:id="idMatcher"
			:name="idMatcher"
		/>

		<label
			:for="idMatcher"
			class="block source-code-pro text-gray-700 opacity-50"
		>
			<span class="label-text">
				{{ labelText }}
			</span>
		</label>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	labelText: {
		type: String,
		required: true,
	},
	idMatcher: {
		type: String,
		required: true,
	},
	field: {
		type: String,
	},
	regexValidator: {
		type: Object,
		required: false,
	},
});
</script>

<style scoped>
#input-wrapper {
	@apply relative h-14;
}

label {
	@apply absolute top-0 bottom-0 left-0 right-0 pointer-events-none border-b-2;
}

label span {
	@apply absolute bottom-0;
	transition: 250ms;
}

input {
	color: #51c9bf;
	@apply w-full h-full bg-transparent  pt-7;
}

label::after {
	content: '';
	@apply inline-block absolute bottom-0 w-0 left-1/2 transform -translate-x-1/2 bg-purple-400;
	height: 2px;
	transition: 250ms;
}

input:focus + label span,
input:valid + label span {
	@apply bottom-8 text-xs font-bold text-purple-400;
}

input:focus + label::after,
input:valid + label::after {
	@apply w-full;
}
</style>
