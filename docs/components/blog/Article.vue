<template>
  <!-- <ParentLayout> -->
  <!-- <template #page> -->
  <main class="page">
    <div class="article-page">
      <div class="blog-title">
        <div class="top-info-title">
          <h1>CUI Corner</h1>
          <p>Democratizing great conversational experiences, one blog at a time.</p>
        </div>
      </div>
      <ArticleList :items="articles.items" />
    </div>
  </main>
  <!-- </template> -->
  <!-- </ParentLayout> -->
</template>
<script setup >

import ArticleList from './ArticleList.vue'

defineProps({
  frontmatter: {
    type: Object,
    default: () => [],
  },
  articles: {
    type: Object,
    default: () => [],
  },
})

</script>
<style lang="scss"  scoped>
.article-page {
  max-width: var(--homepage-width);
  position: relative;
  margin-top: 30px;
  display: flex;
  margin: auto;
  flex-direction: column;
}

.blog-title {
  display: block;
  padding-top: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-weight: 600;
    line-height: 3.0;
    text-align: left;
    font-size: 36px;
  }

  p {
    text-align: left;
    font-weight: 500;
    color: var(--vp-c-text-2);
    padding-bottom: 1rem;
  }
}

@media (max-width:960px) {
  .blog-title {
    padding: 0 2rem;
  }
}

@media (max-width: 719px) {
  .page {
    max-width: 100%;
  }

  /*.article-page{
  width: 100%;
  margin: auto;
}*/
}
</style>
