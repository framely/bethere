<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import PromptHero from '../../components/home/PromptHero.vue'

const { frontmatter } = useData()
const showPromptHero = computed(() => frontmatter.value.promptHero === true)
</script>

<template>
  <PromptHero v-if="showPromptHero" />
</template>
