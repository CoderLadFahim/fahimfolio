<template>
	<button
		class="
			text-4xl
			bg-blue-400
			rounded
			shadow
			py-3
			px-6
			text-white
			font-bold
			pointer
		"
	>
		Clicc
	</button>
	<Cursor />
</template>

<script>
import Cursor from './cursor.vue';

export default {
	name: 'App',
	components: { Cursor },
};
</script>

<style>
body {
	cursor: none !important;
}
</style>
