<script lang="ts" setup>
import {ProjectInterface} from '../TypescriptReusables/Interfaces.interface'

defineProps<{project: ProjectInterface}>()
</script>

<template>
	<div class="project flex align-start gap-4 relative">
		<div class="w-72 space-y-7 relative">
			<img
				class="thumbnail w-full h-52 rounded shadow-md"
				:src="project.thumbnail"
				alt="Project Thumbnail"
			/>
			<div
				class="info-bar rounded-md bg-white shadow-md p-3 h-12 overflow-hidden transition-all duration-150"
			>
				<div class="flex align-center justify-between mb-5">
					<p class="project-title ubuntu-mono-bold custom-blue">
						{{ project.title }}
					</p>
					<div class="dependencies flex align-center space-x-3">
						<img
							v-for="(
								dependency, i
							) in project.dependencies"
							:key="i"
							class="w-6 h-6"
							:src="dependency.iconPath"
							alt="Project Thumbnail"
						/>
					</div>
				</div>
			</div>
			<div
				class="project-description sm:opacity-5 bg-teal-400 text-white text-sm fira-code py-2 px-3 rounded absolute top-32 left-3"
			>
				<p>{{ project.description }}</p>
			</div>
		</div>
		<div
			class="project-actions space-y-4 sm:absolute right-3 top-3 bg-gray-600 rounded-full p-1 self-start border-2 border-gray-700"
		>
			<a
				:href="project.link"
				target="_blank"
				class="bg-purple-300 text-white"
			>
				<font-awesome-icon icon="external-link-alt" />
			</a>
			<a
				v-if="project.sourceCodeLink"
				:href="project.sourceCodeLink"
				target="_blank"
				class="bg-white text-blue-300"
			>
				<font-awesome-icon icon="code" />
			</a>
		</div>
	</div>
</template>

<style>
.project-actions,
.project-description {
	@apply sm:opacity-5 transition;
}

.project:hover .project-actions,
.project:hover .project-description {
	@apply sm:opacity-100;
}

.project-actions a {
	@apply block w-8 h-8 rounded-full shadow-md font-bold text-center py-2 grid place-items-center transform transition scale-90 hover:scale-100;
}
</style>
