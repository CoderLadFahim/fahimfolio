<template>
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
