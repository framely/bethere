<script setup>
const props = defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section
    class="prompt-hero"
    :class="{ compact: props.compact }"
  >
    <div class="shell">
      <template v-if="!props.compact">
        <h1>Launch an AI front desk that strictly follows your business rules.</h1>
        <p class="tagline">Just answer a few questions.</p>
      </template>

      <div class="actions">
        <a href="mailto:sean.wu@bethere.ai?subject=Join%20waitlist">Join waitlist</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.prompt-hero {
  padding: 84px 24px 88px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  font-family: var(--vp-font-family-base);
}

.prompt-hero.compact {
  padding: 0 40px;
  color: inherit;
  background: transparent;
}

.shell {
  max-width: 1152px;
  margin: 0 auto;
  text-align: center;
}

.prompt-hero.compact .shell {
  max-width: 1152px;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.05em;
  color: var(--vp-c-text-1);
}

.tagline {
  margin: 28px 0 0;
  max-width: 75%;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.prompt-hero:not(.compact) h1,
.prompt-hero:not(.compact) .tagline {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  text-align: left;
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 34px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.prompt-hero:not(.compact) .actions {
  justify-content: flex-start;
}

.prompt-hero.compact .actions {
  margin: 60px auto 0;
  padding: 32px 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  justify-content: center;
}

.actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  color: var(--vp-button-brand-text);
  background: var(--vp-c-brand);
}

.actions a:hover {
  background: var(--vp-c-brand-light);
}

@media (max-width: 719px) {
  .prompt-hero {
    padding: 52px 18px 64px;
  }

  .prompt-hero.compact {
    padding: 0 40px;
  }

  .actions {
    margin-top: 40px;
    width: 100%;
    padding: 0;
  }

  .prompt-hero.compact .actions {
    padding: 28px 18px;
  }

  h1 {
    font-size: 2.3rem;
  }

  .prompt-hero:not(.compact) h1,
  .prompt-hero:not(.compact) .tagline {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
}
</style>
