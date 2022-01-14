<template>
	<div id="input-wrapper">
		<input :type="inputType" :id="idMatcher" />
		<label :for="idMatcher">
			{{ labelText }}
		</label>
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
