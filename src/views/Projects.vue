<script lang="ts" setup>
import SectionTitle from '../components/SectionTitle.vue';
import Project from '../components/Project.vue';
import { ProjectInterface } from '../TypescriptReusables/Interfaces';

const projects: ProjectInterface[] = [
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
		]
	},
]
</script>

<template>
	<section id="skills-section" class="site-section">
		<SectionTitle titleText="My.Projects" />
		<div class="project-display">
			<Project v-for="(project, i) in projects" :project="project" :key="i" />
		</div>
	</section>
</template>
