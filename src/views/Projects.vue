<template>
	<section id="skills-section" class="site-section">
		<section-title titleText="My.Projects" />
		<div class="project-display">
			<div class="project" v-for="(project, i) in projects" :key="i">
				<div class="thumbnail">
					<img :src="project.thumbnail" alt="Project Thumbnail" />
				</div>
				<div class="info-bar">
					<p class="project-title">{{ project.title }}</p>
					<div
						class="dependencies"
						v-for="(dependency, i) in project.dependencies"
						:key="i"
					>
						<div class="dependency">
							<img
								class="w-5"
								:src="dependency.iconPath"
								alt="Project Thumbnail"
							/>
						</div>
					</div>
				</div>
				<div class="project-actions">
					<a
						href="project.link"
						class="block w-9 h-9 bg-purple-300 rounded-full shadow-md font-bold text-white text-center py-2"
					>
						O
					</a>
					<a
						href="project.sourceCodeLink"
						class="block w-9 h-9 bg-white rounded-full shadow-md font-bold text-blue-300 text-center py-2"
					>
						X
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
/* <!-- import { ref } from 'vue'; --> */
import SectionTitle from '../components/SectionTitle.vue';

export default {
	name: 'ProjectsSection',
	components: {
		'section-title': SectionTitle,
	},
	setup() {
		const projects = [
			{
				thumbnail:
					'https://imgs.search.brave.com/npemizqc8HwB1t7Yggwwz3rTPxa-HDhSmA0TOv0IFw4/rs:fit:166:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/VllBLVE3ZU1TVGlY/c3AzX3V2T3lnQUFB/QSZwaWQ9QXBp',
				sourceCodeLink: 'www.github.com',
				link: 'www.google.com',
				title: 'WeatherNow',
				dependencies: [
					{
						name: 'tehc eins',
						iconPath:
							'https://imgs.search.brave.com/hCjEciwkS33wfv5zHqMZHOwI1lJJzv-6CU7hf4TNU5g/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/TWhNdmNPaFhLcThn/UFhpM21SZVl3SGFH/TCZwaWQ9QXBp',
					},
				],
			},
		];
		return { projects };
	},
};
</script>

<style></style>
