<script lang="ts" setup>
defineProps<{ titleText: string }>();
</script>

<template>
	<h1 class="text-center ubuntu-mono-bold text-gray-700 text-lg mt-2">
		<span style="color: #51c9bf">&lt;</span>{{ titleText
		}}<span style="color: #51c9bf">/&gt;</span>
	</h1>
</template>
