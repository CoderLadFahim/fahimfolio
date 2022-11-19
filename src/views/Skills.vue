<template>
	<section id="skills-section" class="site-section">
		<section-title titleText="My.Skills" />
		<div
			class="skill-col rounded-md w-5/12 border-2 border-green-300 source-code-pro-bold"
		>
			<div
				class="col-header bg-green-300 text-white text-center py-2 px-0 text-xs"
			>
				Frameworks & Libraries
			</div>
			<div class="col-body space-y-6 py-6">
				<div
					class="skill space-y-1 flex flex-col justify-center items-center"
					v-for="skill in frameworks"
					:key="skill.name"
				>
					<img
						:src="skill.skillImgPath"
						:alt="skill.name"
						:class="`${skill.magnified ? 'w-20' : 'w-12'}`"
					/>
					<p
						:class="`text-center fira-code-medium text-gray-400 ${
							skill.magnified ? 'text-sm' : 'text-xs'
						} ${
							skill.isSeparator
								? 'pb-4 border-b-2 border-gray-200 w-3/4'
								: ''
						}`"
					>
						{{ skill.skillName }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
/* <!-- import { ref } from 'vue'; --> */
import SectionTitle from '../components/SectionTitle.vue';

export default {
	name: 'frameworksSection',
	components: {
		'section-title': SectionTitle,
	},
	setup() {
		const frameworks = [
			{
				skillName: 'ReactJS',
				skillImgPath: '/src/assets/TechLogos/React-Logo.png',
				magnified: true,
			},
			{
				skillName: 'ReduxJS',
				skillImgPath: '/src/assets/TechLogos/redux.png',
				magnified: false,
				isSeparator: true,
			},
			{
				skillName: 'Vue',
				skillImgPath: '/src/assets/TechLogos/Vue-Logo.png',
				magnified: true,
			},
			{
				skillName: 'VueX',
				skillImgPath: '/src/assets/TechLogos/vuex.png',
				magnified: false,
				isSeparator: true,
			},
			{
				skillName: 'TailwindCSS',
				skillImgPath: '/src/assets/TechLogos/Tailwind.png',
				magnified: false,
			},
			{
				skillName: 'GSAP',
				skillImgPath: '/src/assets/TechLogos/gsap.png',
				magnified: false,
			},
		];

		return { frameworks };
	},
};
</script>

<style></style>
