<template>
	<section id="contact-section">
		<section-title titleText="Contact.Me" />
	</section>

	<form
		action="https://formsubmit.co/fahimalemroz@gmail.com"
		method="post"
		class="space-y-4"
	>
		<app-input labelText="Your name" idMatcher="name" />
		<app-input labelText="Your business name" idMatcher="business" />
		<app-input labelText="Email" inputType="email" idMatcher="email" />

		<textarea
			id=""
			name="visitor-message"
			cols="30"
			rows="10"
			placeholder="Your message here"
		></textarea>

		<input
			type="hidden"
			name="_next"
			value="https://fahimfolio.netlify.app"
		/>

		<input type="hidden" name="_captcha" value="false" />

		<input
			type="submit"
			@click="(e) => e.preventDefault()"
			value="Get In Touch!"
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
		/>
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
};
</script>

<style></style>
