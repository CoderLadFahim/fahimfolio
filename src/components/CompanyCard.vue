<template>
    <div class="company-card w-64 h-96 bg-white rounded-lg flex flex-col items-center shadow-lg shadow-gray-300">
        <div class="company-logo flex flex-col items-center justify-start transform -translate-y-[3rem] space-y-5">
            <img class="border h-28 w-28 border-[0.20rem] border-indigo-200 rounded-full" :src="job.imgPath" alt="">
            <p class="source-code-pro text-teal-400 text-xl">{{ job.name }}</p>
        </div>
        <div class="work-details space-y-4 mb-12 mt-5">
            <div class="flex items-center gap-2">
			    <font-awesome-icon icon="map-marker-alt" class="text-teal-300 d-block"/>
			    <p class="fira-code text-[0.85rem] text-gray-600">{{job.location}}</p>
            </div>
            <div class="flex items-center gap-2">
			    <font-awesome-icon icon="calendar-alt" class="text-teal-300 d-block"/>
			    <p class="fira-code text-[0.85rem] text-gray-600">{{job.duration}}</p>
            </div>
        </div>

        <AppButton
			btn-text="Go to website"
			:href="job.link"
			btn-parent-class="w-40 hover:border-teal-400"
			type="anchor"
			btn-class="bg-teal-400 text-white border-teal-400"
		/> 
    </div>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue';
import { JobInterface } from '../TypescriptReusables/Interfaces.interface';

const props = defineProps<{job: JobInterface}>();

</script>

<style scoped>

</style>
