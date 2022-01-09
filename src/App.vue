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
	<p class="text">
		Ipsum voluptas nam nisi rem dicta Est ut veritatis repellendus provident
		iusto? Doloremque unde placeat possimus dolores totam. Ea consequuntur
		molestias consectetur animi quaerat rem! Ut nemo fuga impedit sit modi
		Ipsa illo aliquam ipsam beatae beatae maiores Necessitatibus tempore vero
		magni aut expedita! Ducimus dolorum delectus quidem commodi error.
	</p>

	<Navbar />
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
	name: 'App',
	components: { Navbar },
};
</script>

<style>
body {
	border: 1px solid red;
	cursor: url('./assets/cursor.svg'), auto;
	min-height: 100vh;
}

.pointer {
	cursor: url('./assets/pointer.svg'), auto;
}

.text {
	cursor: url('./assets/text.svg'), auto;
}
</style>
