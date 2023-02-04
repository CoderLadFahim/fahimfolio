<script setup lang="ts">
import { SkillInterface } from '../TypescriptReusables/Interfaces.interface';
import Skill from './Skill.vue';

defineProps<{
    headerText: string,
    iterator: SkillInterface[],
    isSecondaryColumn: boolean
}>();
</script>

<template>
    <div :class="isSecondaryColumn ? 'skill-col source-code-pro secondary-col' : 'skill-col bg-white source-code-pro-bold z-10'">
        <div class="col-header">
            <p class="col-title text-lg">{{ headerText }}</p>
        </div>
        <div class="col-body space-y-6 py-6 sm:space-y-10 sm:py-10">
            <div
                class="skill space-y-1 flex flex-col justify-center items-center"
                v-for="(skill, i) in iterator"
                :key="i"
            >
                <Skill :skill="skill"/>
            </div>
        </div>
    </div>
</template>

<style>
.secondary-col { @apply mt-8 xl:mt-12 3xl:mt-0; }
.secondary-col:first-child { @apply transform translate-x-4 sm:translate-x-0; }
.secondary-col:last-child { @apply transform -translate-x-4 sm:translate-x-0; }
.col-header { @apply bg-green-300 text-white text-center py-2 px-0 text-xs xl:py-3 xl:text-lg; }

.skill-col {
	@apply 
        bg-gray-50
        rounded-lg
        w-5/12
        border-2
        border-green-300
        overflow-hidden

        sm:w-1/4
        sm:rounded-lg
        sm:border-0
        sm:shadow-md

        xl:w-1/6
        xl:rounded-2xl
        3xl:shadow-lg ;
}
</style>
