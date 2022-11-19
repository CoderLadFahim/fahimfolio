<template>
	<section id="skills-section" class="site-section">
		<section-title titleText="My.Skills" />
		<div
			class="skill-col rounded-md w-5/12 border-2 border-green-300 source-code-pro-bold"
		>
			<div class="col-header bg-green-300 text-white text-center py-2">
				Languages
			</div>
			<div class="col-body">
				<div
					class="skill space-y-1 border flex flex-col justify-center items-center"
					v-for="skill in skills"
					:key="skill.name"
				>
					<img
						:src="skill.skillImgPath"
						:alt="skill.name"
						:class="`border ${skill.magnified ? 'w-40' : 'w-32'}`"
					/>
					<p class="text-center fira-code-medium text-gray-400 border">
						{{ skill.skillName }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';

/* <!-- '/src/assets/SlideShowTechLogos/React.png', --> */

export default {
	name: 'SkillsSection',
	components: {
		'section-title': SectionTitle,
	},
	setup() {
		const skills = ref([
			{
				skillName: 'Vue',
				skillImgPath: '/src/assets/TechLogos/Vue-Logo.png',
				magnified: true,
			},
			{
				skillName: 'VueX',
				skillImgPath: '/src/assets/TechLogos/vuex.png',
				magnified: false,
			},
			{
				skillName: 'ReactJS',
				skillImgPath: '/src/assets/TechLogos/React-Logo.png',
				magnified: true,
			},
		]);

		return { skills };
	},
};
</script>

<style></style>
