<script setup lang="ts">
import SectionTitle from '../components/SectionTitle.vue';
import CompanyCard from '../components/CompanyCard.vue';
import { useStore } from 'vuex';

const store = useStore();

</script>

<template>
	<section id="experience-section" class="site-section mt-40">
		<SectionTitle titleText="Work.Experiences" />

		<div class="company-card-wrapper flex flex-wrap justify-evenly items-center mt-28">
		    <CompanyCard v-for="(job, i) in store.state.jobs" :key="i" :job="job" />
		</div>
	</section>
</template>

<style></style>

