<template>
	<h1 class="text-center ubuntu-mono-bold text-gray-700 text-lg mt-2">
		<span style="color: #51c9bf">&lt;</span>{{ titleText
		}}<span style="color: #51c9bf">/&gt;</span>
	</h1>
</template>

<script>
export default {
	name: 'SectionTitle',
	props: {
		titleText: {
			type: String,
			required: true,
		},
	},
};
</script>
