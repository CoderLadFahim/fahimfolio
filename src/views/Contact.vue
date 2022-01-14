<template>
	<section id="contact-section">
		<section-title titleText="Contact.Me" />
	</section>

	<form
		action="https://formsubmit.co/fahimalemroz@gmail.com"
		method="post"
		class="mt-7 flex flex-col items-center space-y-6"
	>
		<app-input labelText="Your name" idMatcher="name" />
		<app-input labelText="Your business name" idMatcher="business" />
		<app-input labelText="Email" inputType="email" idMatcher="email" />

		<textarea
			class="rounded-lg py-2 px-3"
			name="visitor-message"
			cols="25"
			rows="9"
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
			class="submit-btn fira-code-bold pointer"
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

<style>
.submit-btn {
	@apply bg-purple-400 hover:bg-purple-300 transition text-white shadow-md rounded-lg py-2 px-4;
}
</style>
