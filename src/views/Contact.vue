<template>
	<section
		id="contact-section"
		class="w-11/12 mx-auto flex flex-col items-center"
	>
		<section-title titleText="Contact.Me" />

		<form
			action="https://formsubmit.co/fahimalemroz@gmail.com"
			name="contactForm"
			method="post"
			class="
				mt-7
				flex flex-col
				items-center
				space-y-8
				sm:mt-20 sm:w-3/5 sm:space-y-16
				lg:w-1/2 lg:mt-36
				xl:w-1/3 xl:mt-12
			"
		>
			<app-input
				labelText="Your name"
				idMatcher="name"
				field="VISITOR_NAME"
			/>

			<app-input
				labelText="Your business name"
				idMatcher="business"
				:isRequired="true"
				field="BUSINESS_NAME"
			/>

			<app-input
				labelText="Email"
				idMatcher="email"
				field="EMAIL"
				:regex="emailValidationRegex"
				@regex-mismatch="handleRegexMismatch"
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
					md:h-80 md:h-96
				"
				name="visitor-message"
				required
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

			<button
				type="submit"
				class="submit-btn fira-code-bold pointer"
				:class="{ disabled: !invalidValuesExists }"
			>
				Get In Touch!
			</button>
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
		const emailValidationRegex = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
		const invalidValuesExists = ref(false); // this ref adds a disabled class to the form submit btn

		const handleRegexMismatch = (userInputIsValid) =>
			(invalidValuesExists.value = userInputIsValid);

		return { emailValidationRegex, handleRegexMismatch, invalidValuesExists };
	},
};
</script>

<style scoped>
.submit-btn {
	@apply bg-purple-400 hover:bg-purple-300 transition text-white shadow-md text-sm rounded-lg py-2 px-4;
}

form textarea {
	@apply outline-none;
	color: #51c9bf;
}

form textarea:focus {
	@apply outline-none border border-purple-400;
}

.disabled {
	@apply bg-gray-400 pointer-events-none;
}
</style>
