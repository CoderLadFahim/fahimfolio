<script lang="ts" setup>
import SectionTitle from '../components/SectionTitle.vue';
import Project from '../components/Project.vue';
import { ProjectInterface } from '../TypescriptReusables/Interfaces';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const projects = computed((): ProjectInterface[] => store.state.projects);
</script>

<template>
	<section id="skills-section" class="site-section">
		<SectionTitle titleText="My.Projects" />
		<div class="project-display space-y-14 py-14 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center md:space-y-0 md:gap-10 md:justify-start">
			<Project v-for="(project, i) in projects" :project="project" :key="i" />
		</div>
	</section>
</template>
