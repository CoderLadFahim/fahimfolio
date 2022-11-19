<template>
	<section id="skills-section" class="site-section">
		<section-title titleText="My.Skills" />
		<div class="flex items-start mt-5">
			<div
				class="skill-col bg-gray-50 rounded-md w-5/12 border-2 border-green-300 source-code-pro-bold secondary-col"
			>
				<div
					class="col-header bg-green-300 text-white text-center py-2 px-0 text-xs"
				>
					<span class="col-title">Languages</span>
				</div>
				<div class="col-body space-y-6 py-6">
					<div
						class="skill space-y-1 flex flex-col justify-center items-center"
						v-for="skill in languages"
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

			<div
				class="skill-col rounded-md w-5/12 border-2 border-green-300 bg-white source-code-pro-bold z-50"
			>
				<div
					class="col-header bg-green-300 text-white text-center py-2 text-xs"
				>
					Frameworks
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

			<div
				class="skill-col bg-gray-50 rounded-md w-5/12 border-2 border-green-300 source-code-pro-bold secondary-col"
			>
				<div
					class="col-header bg-green-300 text-white text-center py-2 px-0 text-xs"
				>
					<span class="col-title">Tools</span>
				</div>
				<div class="col-body space-y-6 py-6">
					<div
						class="skill space-y-1 flex flex-col justify-center items-center"
						v-for="skill in tools"
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

		const languages = [
			{
				skillName: 'HTML+CSS',
				skillImgPath: '/src/assets/TechLogos/css.png',
				magnified: false,
			},
			{
				skillName: 'Sass',
				skillImgPath: '/src/assets/TechLogos/sass.png',
				magnified: false,
			},
			{
				skillName: 'JavaScript',
				skillImgPath: '/src/assets/TechLogos/JS.png',
				magnified: false,
			},
			{
				skillName: 'TypeScript',
				skillImgPath: '/src/assets/TechLogos/TS.png',
				magnified: false,
			},
		];

		const tools = [
			{
				skillName: 'Terminal',
				skillImgPath: '/src/assets/TechLogos/terminal.png',
				magnified: false,
			},
			{
				skillName: 'Git',
				skillImgPath: '/src/assets/TechLogos/git.png',
				magnified: false,
			},
			{
				skillName: 'GitHub',
				skillImgPath: '/src/assets/TechLogos/github.png',
				magnified: false,
			},
			{
				skillName: 'npm',
				skillImgPath: '/src/assets/TechLogos/npm.png',
				magnified: false,
			},
			{
				skillName: 'figma',
				skillImgPath: '/src/assets/TechLogos/figma.png',
				magnified: false,
			},
		];

		return { frameworks, languages, tools };
	},
};
</script>

<style>
.secondary-col {
	@apply mt-8;
}

.secondary-col:first-child {
	@apply transform translate-x-4;
}

.secondary-col:last-child {
	@apply transform -translate-x-4;
}
</style>
