<script setup lang="ts">
import { SkillInterface } from '../TypescriptReusables/Interfaces.interface';
defineProps<{skill: SkillInterface}>();
</script>

<template>
    <img
        :src="skill.skillImgPath"
        :alt="skill.skillName"
        :class="`${skill.magnified ? 'w-20' : 'w-12'}`"
    />
    <p
        :class="`text-center fira-code-medium text-gray-400 ${
            skill.magnified ? 'text-sm' : 'text-xs'
        } ${
            skill.isSeparator
                ? 'pb-4 border-b-2 border-gray-200 w-3/4'
                : ''
        }`"
    >
        {{ skill.skillName }}
    </p>
</template>
