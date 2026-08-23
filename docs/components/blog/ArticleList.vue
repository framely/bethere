<template>
  <div class="article-wrapper">

    <div v-if="!items.length">Nothing in here.</div>
    <article v-for="({ info, path }, index) in items" :key="path">
      <div v-if="index > 0" class="blog-card-divider"></div>
      <div class="blog-card">
        <div class="blog-card-info">
          <div v-if="info.title">
            <h2 class="blog-card-info-title">{{ info.title }}</h2>
          </div>
          <div v-if="info.description">
            <p class="blog-card-info-description">{{ info.description[0] }}</p>
          </div>
          <a :href="path">
            Read more →
          </a>
        </div>
        <div>
          <img class="blog-card-image" :src="info.image" :alt="info.title || ''" />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="scss">
.article-wrapper {
  display: flex;
  flex-direction: column;

  .blog-card-divider {
    height: 1px;
    margin-bottom: 24px;
    background-color: var(--vp-c-divider);
  }

  .blog-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .blog-card-image {
    display: block;
    width: 16rem;
    min-width: 16rem;
    height: 10rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    object-fit: cover;
    margin: 0;
  }

  .blog-card-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    color: var(--c-text);

    >a {
      color: var(--vp-c-text-1);
      text-decoration: underline;
      text-decoration-color: var(--vp-c-border);
      text-underline-offset: 3px;

      &:hover {
        text-decoration-color: currentcolor;
      }
    }
  }

  .blog-card-info-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 1.5rem;
    padding: 0;
    border: 0;
  }

  .blog-card-info-description {
    color: var(--vp-c-text-2);
    margin-top: 0px;
    font-weight: normal;
    margin-bottom: 1.5rem;
  }

}

@media (max-width:960px) {
  .article-wrapper {
    padding: 0 2rem;
    grid-column-gap: 2rem;
  }
}

@media (max-width:719px) {
  .article-wrapper {
    grid-template-columns: 1fr;
    align-items: stretch;
    .blog-card {
      flex-direction: column-reverse;
    }
    .blog-card-image {
      width: 100%;
      min-width: 0;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
}
</style>
