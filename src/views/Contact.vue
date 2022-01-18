<template>
	<section
		id="contact-section"
		class="w-11/12 mx-auto flex flex-col items-center"
	>
		<section-title titleText="Contact.Me" />

		<form
			action="https://formsubmit.co/fahimalemroz@gmail.com"
			method="post"
			class="mt-7 flex flex-col items-center space-y-8"
		>
			<app-input
				labelText="Your name"
				idMatcher="name"
				@user-input-change="userInputChangeHandler"
			/>
			<app-input labelText="Your business name" idMatcher="business" />
			<app-input labelText="Email" idMatcher="email" />

			<textarea
				class="rounded-lg py-2 px-3 fira-code"
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
	</section>
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';
import Input from '../components/Input.vue';
import { ref } from 'vue';

export default {
	name: 'Contact',
	components: {
		'section-title': SectionTitle,
		'app-input': Input,
	},
	setup() {
		const emailChecker = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
		const userInputChangeHandler = ({ value: data }) => {
			console.log(data);
		};

		return {
			emailChecker,
			userInputChangeHandler,
		};
	},
};
</script>

<style>
.submit-btn {
	@apply bg-purple-400 hover:bg-purple-300 transition text-white shadow-md text-sm rounded-lg py-2 px-4;
}

form textarea {
	color: #51c9bf;
}

textarea:focus {
	@apply outline-none border-2  border-purple-300;
}
</style>
