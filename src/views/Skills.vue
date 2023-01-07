<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

import SectionTitle from '../components/SectionTitle.vue';
import SkillColumn from '../components/SkillColumn.vue';
import { SkillInterface } from '../TypescriptReusables/Interfaces.interface';

const store = useStore();
const languages = computed((): SkillInterface[] => store.state.skills.languages);
const frameworks = computed((): SkillInterface[] => store.state.skills.frameworks);
const tools = computed((): SkillInterface[] => store.state.skills.tools);
</script>

<template>
	<section id="skills-section" class="site-section">
		<SectionTitle titleText="My.Skills" />
		<div
			class="flex items-start mt-5 sm:mt-20 sm:justify-evenly xl:justify-center xl:gap-20 xl:mt-10 3xl:mt-24 3xl:gap-24 3xl:items-center"
		>
			<SkillColumn
				:isSecondaryColumn="true"
				:headerText="'Languages'" 
				:iterator="languages"
			/>

			<SkillColumn
				:isSecondaryColumn="false"
				:headerText="'Frameworks'" 
				:iterator="frameworks"
			/>

			<SkillColumn
				:isSecondaryColumn="true"
				:headerText="'Tools'" 
				:iterator="tools"
			/>
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
