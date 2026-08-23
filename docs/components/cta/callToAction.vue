<script setup >
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const cta = computed(() => {
  if (Array.isArray(frontmatter.value.cta)) {
    return frontmatter.value.cta
  }
  return []
})
</script>

<template>
  <div v-if="cta.length" class="container-s">
    <div v-for="cta in cta" :key="cta.details">
      <h2>{{ cta.details }}</h2>
      <a class="button-cta" :href="cta.link" target="_blank" rel="noopener noreferrer">
        {{ cta.title }}
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-s {
  padding: 0 40px;
  div {
    max-width: 1152px;
    margin: 60px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    justify-content: center;
    padding: 60px 24px;

    h2 {
      font-weight: 600;
      text-align: center;
      line-height: 36px;
      font-size: 24px;
      color: var(--vp-c-text-2);
      margin-bottom: 32px;
    }
  }
}
.button-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 20px;
  line-height: 1;
  text-align: center;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);

  &:hover {
    color: var(--vp-button-brand-hover-text);
    border-color: var(--vp-button-brand-hover-border);
    background-color: var(--vp-button-brand-hover-bg);
  }
}
</style>
