<script setup >
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const contentCard = computed(() => {
  if (Array.isArray(frontmatter.value.contentCards)) {
    return frontmatter.value.contentCards
  }
  return []
})
</script>

<template>
  <div v-if="contentCard.length" class="container-c">
    <div v-for="contentCard in contentCard" :key="contentCard.details" class="contentCards">
      <div class="contentCard-card" :class="{ 'media-right': !contentCard.left }">
        <div class="image">
          <img
            :src="contentCard.image"
            :alt="contentCard.alt || ''"
            width="1200"
            height="900"
          />
        </div>
        <div class="content">
          <h2 class="title">{{ contentCard.title }}</h2>
          <p class="desc">{{ contentCard.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-c {
  margin: 3rem auto;
  padding: 0 clamp(24px, 4.5vw, 64px);

  .contentCards {
    max-width: 1152px;
    margin: 0 auto;

    & + .contentCards {
      border-top: 1px solid var(--vp-c-divider);
    }

    .contentCard-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 4rem 0;
      gap: clamp(2rem, 5vw, 4rem);

      &.media-right .image {
        order: 2;
      }

      .image {
        width: 45%;

        img {
          display: block;
          width: 100%;
          height: auto;
          border: 1px solid var(--vp-c-divider);
          border-radius: 16px;
          background-color: var(--vp-c-bg);
        }
      }

      .content {
        width: 55%;
        display: flex;
        flex-direction: column;

        .title {
          color: var(--vp-c-text-1);
          font-weight: 600;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          line-height: 1.2;
          letter-spacing: normal;
          margin-bottom: 1.5rem;
        }

        .desc {
          color: var(--vp-c-text-2);
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.7;
        }
      }
    }
  }
}
@media (max-width: 719px) {
  .container-c {
    display: flex;
    flex-direction: column;
    padding: 0 24px;

    .contentCards {
      .contentCard-card {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 3rem 0;
        gap: 2rem;

        .image {
          order: 0;
          width: 100%;

          img {
            border-radius: 12px;
          }
        }

        .content {
          width: 100%;
          order: 1;
        }
      }
    }
  }
}
</style>
