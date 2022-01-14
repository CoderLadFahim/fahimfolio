<template>
	<div id="input-wrapper" class="w-full border border-2">
		<label
			:for="idMatcher"
			class="block source-code-pro text-gray-700 opacity-50"
		>
			{{ labelText }}
		</label>

		<input
			class="input fira-code-bold outline-none"
			required
			:type="inputType"
			:id="idMatcher"
			:name="idMatcher"
		/>
	</div>
</template>

<script>
export default {
	name: 'Input',
	props: {
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
	},
};
</script>

<style>
.input {
	color: #51c9bf;
}
</style>
