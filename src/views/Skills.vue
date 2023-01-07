<script setup>
import SectionTitle from '../components/SectionTitle.vue';
const frameworks = [
	{
		skillName: 'VueJS',
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
		skillName: 'TailwindCSS',
		skillImgPath: '/src/assets/TechLogos/Tailwind.png',
		magnified: false,
	},
	{
		skillName: 'Bootstrap',
		skillImgPath: '/src/assets/TechLogos/bootstrap.png',
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
		skillName: 'Figma',
		skillImgPath: '/src/assets/TechLogos/figma.png',
		magnified: false,
	},
	{
		skillName: 'WSL2',
		skillImgPath: '/src/assets/TechLogos/linux.png',
		magnified: false,
	},
	{
		skillName: 'Vim',
		skillImgPath: '/src/assets/TechLogos/vim.png',
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
];
</script>

<template>
	<section id="skills-section" class="site-section">
		<SectionTitle titleText="My.Skills" />
		<div
			class="flex items-start mt-5 sm:mt-20 sm:justify-evenly xl:justify-center xl:gap-20 xl:mt-10 3xl:mt-24 3xl:gap-24 3xl:items-center"
		>
			<div class="skill-col source-code-pro secondary-col">
				<div class="col-header">
					<p class="col-title">Languages</p>
				</div>
				<div class="col-body space-y-6 py-6 sm:space-y-10 sm:py-10">
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

			<div class="skill-col bg-white source-code-pro-bold z-50">
				<div class="col-header">Frameworks</div>
				<div class="col-body space-y-6 py-6 sm:space-y-10 sm:py-10">
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
									? 'pb-6 border-b-2 border-gray-200 w-3/5 xl:w-3/6'
									: ''
							}`"
						>
							{{ skill.skillName }}
						</p>
					</div>
				</div>
			</div>

			<div class="skill-col source-code-pro secondary-col">
				<div class="col-header">
					<span class="col-title">Tools</span>
				</div>
				<div class="col-body space-y-6 py-6 sm:space-y-10 sm:py-10">
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

<style>
.secondary-col {
	@apply mt-8 xl:mt-12 3xl:mt-0;
}

.secondary-col:first-child {
	@apply transform translate-x-4 sm:translate-x-0;
}

.secondary-col:last-child {
	@apply transform -translate-x-4 sm:translate-x-0;
}

.skill-col {
	@apply bg-gray-50 rounded-lg w-5/12 sm:w-1/4 xl:w-1/6 border-2 border-green-300 sm:rounded-lg sm:border-0 overflow-hidden sm:shadow-md xl:rounded-2xl 3xl:shadow-lg;
}

.col-header {
	@apply bg-green-300 text-white text-center py-2 px-0 text-xs xl:py-3 xl:text-lg;
}
</style>
