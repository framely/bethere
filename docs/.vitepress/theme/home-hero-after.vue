<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import PromptHero from '../../components/home/PromptHero.vue'
import HomeVideo from '../../components/home/HomeVideo.vue'

const { frontmatter } = useData()
const showPromptHero = computed(() => frontmatter.value.promptHero === true)
const homeVideo = computed(() => frontmatter.value.homeVideo)
const homeVideoPoster = computed(() => frontmatter.value.homeVideoPoster)
</script>

<template>
  <PromptHero v-if="showPromptHero" />
  <HomeVideo
    v-if="homeVideo"
    :src="homeVideo"
    :poster="homeVideoPoster"
  />
</template>
