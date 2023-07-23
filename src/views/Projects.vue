<script lang="ts" setup>
import SectionTitle from '../components/SectionTitle.vue';
import Project from '../components/Project.vue';
import { ProjectInterface } from '../TypescriptReusables/Interfaces.interface';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const projects = computed<ProjectInterface[]>(() => store.state.projects);
</script>

<template>
	<section id="projects-section" class="site-section">
		<SectionTitle titleText="My.Projects" />
		<div class="project-display xl:ml-36 2xl:ml-0">
			<Project v-for="(project, i) in projects" :project="project" :key="i" />
		</div>
	</section>
</template>


<style>
.project-display {
	@apply 
		space-y-14
		py-14
		flex
		flex-col 
	    items-center

	    sm:grid 
	    sm:grid-cols-3 
	    sm:grid-rows-3 
	    sm:gap-y-12
	    2xl:justify-items-center

		md:space-y-0 
}
</style>
