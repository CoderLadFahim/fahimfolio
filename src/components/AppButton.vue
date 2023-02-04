<script setup lang="ts">
const emit = defineEmits(['click']);
const handleBtnClick = (e: MouseEvent): void => {
	emit('click', e);
};
</script>

<template>
	<div
		class="app-button text-slate-600 inline-block ubuntu-mono relative w-24 h-10"
		@click="handleBtnClick"
	>
		<button class="border border-slate-600 absolute transition duration-150 bg-white w-full h-full">Click me</button>
	</div>
</template>

<style scoped>
.app-button:hover {
	@apply border border-slate-600; 
}

.app-button:hover button {
	@apply bottom-1 right-1; 
}
</style>
