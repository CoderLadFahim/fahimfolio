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
        <div class="project-actions space-y-4 sm:absolute top-0 -right-12">
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
</template>
