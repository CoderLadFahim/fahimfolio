<script setup lang="ts">
const emit = defineEmits(['click']);
const handleBtnClick = (e: MouseEvent): void => {
	emit('click', e);
};
</script>

<template>
	<div
		class="app-button text-slate-600 inline-block ubuntu-mono"
		@click="handleBtnClick"
	>
		<!-- <div class="background-border"></div> -->
		<button class="border border-slate-600 px-7 py-3 relative transition bg-white">Click me</button>
	</div>
</template>

<style scoped>
.app-button:hover {
	@apply border border-slate-400; 
}

.app-button:hover button {
	@apply bottom-1 right-1; 
}
</style>
