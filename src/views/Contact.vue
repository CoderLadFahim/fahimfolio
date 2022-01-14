<template>
	<section id="contact-section">
		<section-title titleText="Contact.Me" />
	</section>

	<form>
		<app-input labelText="Your name"></app-input>
		<app-input labelText="Your business name"></app-input>
		<app-input labelText="Email" inputType="email"></app-input>

		<textarea
			id=""
			name=""
			cols="30"
			rows="10"
			placeholder="Your message here"
		></textarea>

		<button
			@click.enter="submitButtonHandler"
			class="
				bg-purple-400
				hover:bg-purple-300
				transition
				pointer
				text-white
				fira-code-bold
				shadow
				rounded-lg
				py-2
				px-4
			"
		>
			Get In Touch!
		</button>
	</form>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
import Input from '../components/Input.vue';

export default {
	name: 'Contact',
	components: {
		'section-title': SectionTitle,
		'app-input': Input,
	},
	setup() {
		const submitButtonHandler = (e) => {
			e.preventDefault();
		};

		return {
			submitButtonHandler,
		};
	},
};
</script>

<style></style>
