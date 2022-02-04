<template>
	<section id="skills-section">
		<section-title titleText="My.Skills" />

		<div class="skill-cols">
			<div class="skill-col">
				<h2 class="col-title">Languages</h2>
				<div class="skills">
					<img src="" alt="" />
					<p>HTML+CSS</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionTitle from '../components/SectionTitle';

export default {
	name: 'SkillsSection',
	components: {
		'section-title': SectionTitle,
	},
};
</script>

<style></style>
