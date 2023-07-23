<script lang="ts" setup>
import SectionTitle from "../components/SectionTitle.vue";
import Input from "../components/Input.vue";
import AppButton from "../components/AppButton.vue";
import { ref, computed } from "vue";
const emailRegex: RegExp =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const name = ref<string>("");
const companyName = ref<string>("");
const email = ref<string>("");

const allInputsValid = computed<boolean>(
	() => name.value && companyName.value && emailRegex.test(email.value)
);
</script>

<template>
	<section id="contact-section" ref="contactSectionElementRef"
		class="w-11/12 mx-auto flex flex-col items-center site-section mb-20">
		<SectionTitle titleText="Contact.Me" />

		<form action="https://formsubmit.co/fahimalemroz@gmail.com" name="contactForm" method="post"
			class="mt-7 flex flex-col space-y-8 items-center sm:mt-20 sm:w-3/5 sm:space-y-16 lg:w-1/2 lg:mt-36 xl:w-1/3 xl:mt-12">
			<Input labelText="Your name" idMatcher="name" v-model="name" field="VISITOR_NAME" />

			<Input labelText="Name of your company" idMatcher="business" :isRequired="true" field="BUSINESS_NAME"
				v-model="companyName" />

			<Input labelText="Email" idMatcher="email" field="EMAIL" :regex="emailRegex" v-model="email" />

			<textarea class="rounded-lg source-code-pro py-2 px-3 sm:w-full sm:h-72 shadow sm:py-3 sm:px-4 md:h-80 md:h-96"
				name="visitor-message" required cols="25" rows="9" placeholder="Your message here"></textarea>

			<input type="hidden" name="_next" value="https://fahimfolio.netlify.app" />

			<input type="hidden" name="_captcha" value="false" />

			<AppButton
				btn-text="Get in Touch!"			
				btn-parent-class="w-40 hover:border-purple-400"
				type="button"
				btn-class="bg-purple-400 text-white border-purple-400"
				:is-disabled="!allInputsValid"
			/>
		</form>
	</section>
</template>

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
