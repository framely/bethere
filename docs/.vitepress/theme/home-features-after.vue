<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import Cta from '../../components/cta/callToAction.vue'
import ContentCard from '../../components/contentCard/ContentCard.vue'
import PromptHero from '../../components/home/PromptHero.vue'
import Video from '../../components/video/videoSection.vue'
import CFooter from '../../components/footer/columnFooter.vue'

const { frontmatter } = useData()
const showPromptCta = computed(() => frontmatter.value.promptCta === true)
</script>

<template #home-features-after>
  <Video />
  <ContentCard />
  <PromptHero v-if="showPromptCta" compact />
  <Cta v-else />
  <CFooter />
</template>

<style lang="scss">
.home-features-after {
  width: 100%;
  height: 200px;
  background: red;
}
</style>
