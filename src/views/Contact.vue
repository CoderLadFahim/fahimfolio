<template>
	<section
		id="contact-section"
		class="w-11/12 mx-auto flex flex-col items-center"
	>
		<section-title titleText="Contact.Me" />

		<form
			action="https://formsubmit.co/fahimalemroz@gmail.com"
			method="post"
			class="
				mt-7
				flex flex-col
				items-center
				space-y-8
				sm:mt-20 sm:w-3/5 sm:space-y-16
			"
		>
			<app-input
				labelText="Your name"
				idMatcher="name"
				purpose="VISITOR_NAME"
				@user-input-change="userInputChangeHandler"
			/>
			<app-input
				labelText="Your business name"
				idMatcher="business"
				purpose="BUSINESS_NAME"
				@user-input-change="userInputChangeHandler"
			/>
			<app-input
				labelText="Email"
				idMatcher="email"
				purpose="EMAIL"
				@user-input-change="userInputChangeHandler"
			/>

			<textarea
				class="
					rounded-lg
					py-2
					px-3
					fira-code
					sm:w-full sm:h-72
					shadow
					sm:py-3 sm:px-4
				"
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
		const formDataBits = [];

		const userInputChangeHandler = (data) => formDataBits.push(data);

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

.textarea-wrapper {
	@apply relative;
}

.textarea-wrapper::after {
	@apply inline-block absolute bottom-0 w-0 left-1/2 transform -translate-x-1/2 bg-purple-400;
}

.textarea-wrapper textarea {
	color: #51c9bf;
}
</style>
