<script setup>
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
  <div
    v-if="contentCard.length"
    class="container-c"
  >
    <div
      v-for="card in contentCard"
      :key="card.id"
      class="contentCards"
    >
      <div
        class="contentCard-card"
        :class="{ reverse: !card.left }"
      >
        <div class="image">
          <img
            :src="card.image"
            :alt="card.title"
          >
        </div>
        <div class="content">
          <h2 class="title">
            {{ card.title }}
          </h2>
          <p class="desc">
            {{ card.details }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-c {
  margin: 2.5rem auto;
  padding: 0 64px;

  .contentCards {
    max-width: 1152px;
    margin: 0 auto;

    .contentCard-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 4rem 0;
      gap: 4rem;

      &.reverse {
        flex-direction: row-reverse;
      }

      .image {
        width: 45%;
      }

      .content {
        width: 55%;
        display: flex;
        flex-direction: column;

        .title {
          font-weight: 700;
          font-size: 2.25rem;
          line-height: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .desc {
          color: var(--vp-c-text-2);
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 2rem;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
}
@media (max-width: 719px) {
  .container-c {
    display: flex;
    flex-direction: column;
    padding: 0 40px;

    .contentCards {

      .contentCard-card {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        gap: 1.5rem;

        &.reverse {
          flex-direction: column;
        }

        .image {
          width: 100%;
        }

        .content {
          width: 100%;
          order: 1;
          padding: 0 8px;
          
          .title {
            font-size: 1.75rem;
          }
        }
      }
    }
  }
}
</style>