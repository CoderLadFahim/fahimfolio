<template>
	<div id="input-wrapper" class="border border-2 border-cyan-300 w-full">
		<input
			class="fira-code-bold outline-none pointer"
			required
			:type="inputType"
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

label,
label span,
label::before,
label::after {
	@apply transition duration-300;
}

label {
	@apply absolute  top-0 bottom-0 left-0 right-0 pointer-events-none;
}

label span {
	@apply absolute bottom-0;
}

input {
	color: #51c9bf;
	@apply w-full h-full bg-transparent border pt-9;
}

input:focus + label span {
	@apply top-1 text-xs font-bold;
	color: #51c9bf;
}
</style>
