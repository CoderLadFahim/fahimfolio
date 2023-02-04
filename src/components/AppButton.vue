<script setup lang="ts">
const emit = defineEmits(["click"]);

const props = withDefaults(
	defineProps<{
		btnText: string;
		btnClass: string;
		btnParentClass: string;
	}>(),
	{
		btnText: "Click me",
		btnClass: "",
		btnParentClass: "",
	}
);

const handleBtnClick = (e: MouseEvent): void => emit("click", e);
</script>

<template>
	<div
		:class="`app-button text-slate-600 border border-transparent inline-block ubuntu-mono relative w-24 h-10 transition duration-150 ${props.btnParentClass}`"
		@click="handleBtnClick">
		<button :class="`border border-slate-600 absolute transition duration-150 bg-white w-full h-full ${props.btnClass}`">
			{{ props.btnText }}
		</button>
	</div>
</template>

<style scoped>
.app-button:hover {
	@apply border border-slate-600;
}

.app-button:hover button {
	@apply -translate-x-1 -translate-y-1;
}

.app-button:hover button:active {
	@apply -translate-x-0 -translate-y-0;
}
</style>
