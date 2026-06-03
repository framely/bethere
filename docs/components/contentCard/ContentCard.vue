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

const eyebrow = computed(() => frontmatter.value.contentCardsEyebrow || '')
const title = computed(() => frontmatter.value.contentCardsTitle || '')
const intro = computed(() => frontmatter.value.contentCardsIntro || '')

function formatStep(step) {
  return String(step).padStart(2, '0')
}
</script>

<template>
  <section
    v-if="contentCard.length"
    class="container-c"
  >
    <div
      v-if="eyebrow || title || intro"
      class="section-header"
    >
      <p
        v-if="eyebrow"
        class="eyebrow"
      >
        {{ eyebrow }}
      </p>
      <h2
        v-if="title"
        class="section-title"
      >
        {{ title }}
      </h2>
      <p
        v-if="intro"
        class="section-intro"
      >
        {{ intro }}
      </p>
    </div>

    <div class="card-grid">
      <article
        v-for="card in contentCard"
        :key="card.title"
        class="feature-card"
      >
        <div class="image">
          <img
            :src="card.image"
            :alt="card.title"
          >
        </div>
        <div class="content">
          <p
            v-if="card.step"
            class="step"
          >
            {{ formatStep(card.step) }}
          </p>
          <h2 class="title">
            {{ card.title }}
          </h2>
          <p class="desc">
            {{ card.details }}
          </p>
          <ul
            v-if="Array.isArray(card.points) && card.points.length"
            class="points"
          >
            <li
              v-for="point in card.points"
              :key="point"
            >
              {{ point }}
            </li>
          </ul>
          <p
            v-if="card.outcomeText"
            class="outcome"
          >
            <span v-if="card.outcome">{{ card.outcome }}</span>
            {{ card.outcomeText }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-c {
  margin: 5rem auto 2.5rem;
  padding: 0 64px;
}

.section-header {
  max-width: 1152px;
  margin: 0 auto 1rem;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: var(--vp-c-brand);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.4;
  text-transform: uppercase;
}

.section-title {
  max-width: 760px;
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.08;
}

.section-intro {
  max-width: 760px;
  margin: 1.25rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.8;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1152px;
  margin: 2.75rem auto 0;
}

.feature-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  padding: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: #f3f6f9;
}

.image img {
  display: block;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.35rem;
}

.step {
  margin: 0 0 0.75rem;
  color: var(--vp-c-brand);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.45rem;
  font-weight: 800;
  line-height: 1.16;
}

.desc {
  margin: 0.85rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.98rem;
  font-weight: 500;
  line-height: 1.65;
}

.points {
  display: grid;
  gap: 0.55rem;
  margin: 1.15rem 0 0;
  padding: 0;
  list-style: none;
}

.points li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--vp-c-text-1);
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.45;
}

.points li::before {
  position: absolute;
  top: 0.55em;
  left: 0;
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: var(--vp-c-brand);
  content: "";
}

.outcome {
  margin: auto 0 0;
  padding-top: 1.2rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.45;
}

.outcome::before {
  display: block;
  width: 42px;
  height: 2px;
  margin-bottom: 0.85rem;
  background: var(--vp-c-brand);
  content: "";
}

@media (max-width: 719px) {
  .container-c {
    margin-top: 3.5rem;
    padding: 0 24px;
  }

  .section-title {
    font-size: 2.15rem;
    line-height: 1.12;
  }

  .section-intro {
    font-size: 1rem;
    line-height: 1.7;
  }

  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }

  .image {
    height: 190px;
  }

  .title {
    font-size: 1.35rem;
  }
}
</style>
