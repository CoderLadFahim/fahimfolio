<script lang="ts" setup>
import { ProjectInterface } from '../TypescriptReusables/Interfaces';

defineProps<{project: ProjectInterface}>()
</script>

<template>
	 <div class="project flex align-start gap-4 relative">
		  <div class="w-72 space-y-7">
				<img class="thumbnail w-full h-52 rounded-xl shadow-md" :src="project.thumbnail" alt="Project Thumbnail" />
				<div class="info-bar rounded-md bg-white shadow-md flex align-center justify-between p-3">
					 <p class= "project-title ubuntu-mono-bold custom-blue">{{ project.title }}</p>
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
		  </div>
		  <div class="project-actions space-y-4 sm:absolute top-0 right-3 top-3 bg-gray-600 rounded-full p-1 self-start">
				<a
					 :href="project.link"
					 target="_blank"
					 class="block w-8 h-8 bg-purple-300 rounded-full shadow-md font-bold text-white text-center py-2 grid place-items-center"
				>
					 <font-awesome-icon icon="external-link-alt" />
				</a>
				<a
					 :href="project.sourceCodeLink"
					 target="_blank"
					 class="block w-8 h-8 bg-white rounded-full shadow-md font-bold text-blue-300 text-center py-2 grid place-items-center"
				>
					 <font-awesome-icon icon="code" />
				</a>
		  </div>
	 </div>
</template>

<style>
.project-actions {
	@apply sm:opacity-10 transition;
}

.project:hover .project-actions {
	@apply sm:opacity-100;
}
</style>