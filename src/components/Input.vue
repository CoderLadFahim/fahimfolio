<template>
	<div id="input-wrapper">
		<input :type="inputType" :id="labelText" />
		<label :for="labelText" id="label">
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
	},
};
</script>
