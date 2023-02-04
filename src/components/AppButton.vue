<script setup lang="ts">
const emit = defineEmits(["click"]);

const props = withDefaults(
	defineProps<{
		btnText: string;
		btnClass: string;
		isDisabled: boolean;
		btnParentClass: string;
	}>(),
	{
		btnText: "Click me",
		btnClass: "",
		btnParentClass: "",
		isDisabled: false,
	}
);

const handleBtnClick = (e: MouseEvent): void => emit("click", e);
</script>

<template>
	<div
		:class="`app-button text-gray-600 border-transparent inline-block source-code-pro relative w-32 h-10 transition duration-150 hover:border ${props.btnParentClass} ${props.isDisabled ? 'hover:border-none' : 'hover:border hover:border-slate-600'}`"
		@click="handleBtnClick">
		<button :disabled="props.isDisabled"
			:class="`border pointer disabled:opacity-50 disabled:pointer-events-none border-slate-600 absolute transition duration-150 bg-gray-100 w-full h-full ${props.btnClass}`">
			{{ props.btnText }}
		</button>
	</div>
</template>

<style scoped>
.app-button:hover button {
	@apply disabled:-translate-x-0 disabled:-translate-y-0 -translate-x-1 -translate-y-1;
}

.app-button:hover button:active {
	@apply -translate-x-0 -translate-y-0;
}
</style>
