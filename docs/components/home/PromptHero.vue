<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
})

const prompt = ref('')
const placeholder = ref('')
const promptExamples = [
  'Build a support agent for our fitness studio that handles membership questions, reschedules classes, and escalates billing issues to a human when confidence is low.',
  'Create a multilingual retail agent that answers delivery questions, recommends products, and routes refund issues to support.',
  'Launch a property management agent that triages maintenance requests, updates tenants, and books vendor visits automatically.',
]

let typingTimeout
let typingInterval
let typingResumeTimeout

function stopTyping() {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
    typingTimeout = undefined
  }
  if (typingInterval) {
    clearInterval(typingInterval)
    typingInterval = undefined
  }
  if (typingResumeTimeout) {
    clearTimeout(typingResumeTimeout)
    typingResumeTimeout = undefined
  }
}

function startTyping() {
  if (typeof window === 'undefined') {
    placeholder.value = promptExamples[0]
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    placeholder.value = promptExamples[0]
    return
  }

  stopTyping()
  placeholder.value = ''

  let exampleIndex = 0
  let charIndex = 0
  let deleting = false

  const tick = () => {
    const current = promptExamples[exampleIndex]

    if (!deleting) {
      charIndex += 1
      placeholder.value = current.slice(0, charIndex)

      if (charIndex >= current.length) {
        deleting = true
        typingResumeTimeout = window.setTimeout(tick, 1500)
        return
      }
    } else {
      charIndex -= 1
      placeholder.value = current.slice(0, charIndex)

      if (charIndex <= 0) {
        deleting = false
        exampleIndex = (exampleIndex + 1) % promptExamples.length
      }
    }

    typingResumeTimeout = window.setTimeout(tick, deleting ? 12 : 18)
  }

  typingTimeout = window.setTimeout(tick, 240)
}

onMounted(() => {
  startTyping()
})

onBeforeUnmount(() => {
  stopTyping()
})
</script>

<template>
  <section
    class="prompt-hero"
    :class="{ compact: props.compact }"
  >
    <div class="shell">
      <template v-if="!props.compact">
        <h1>Build user-facing agents you can trust.</h1>
        <p class="tagline">Don’t let one random reply demage your brand.</p>
      </template>

      <div class="input-shell">
        <textarea
          id="home-agent-prompt"
          v-model="prompt"
          @focus="stopTyping"
          @input="stopTyping"
          spellcheck="false"
          :placeholder="placeholder"
        />
        <div class="actions">
          <a href="mailto:sean.wu@bethere.ai?subject=Join%20waitlist">Join waitlist</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.prompt-hero {
  padding: 84px 24px 88px;
  color: #f4f7fb;
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
  color: #f7fbff;
}

.tagline {
  margin: 28px 0 0;
  max-width: 75%;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.55;
  color: #d8e6f3;
}

.prompt-hero:not(.compact) h1,
.prompt-hero:not(.compact) .tagline {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  text-align: left;
}

.input-shell {
  margin-top: 52px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  text-align: left;
}

.prompt-hero:not(.compact) .actions {
  justify-content: flex-start;
}

.prompt-hero.compact .input-shell {
  margin: 60px auto 0;
  padding: 60px 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

textarea {
  width: 100%;
  min-height: 260px;
  padding: 22px 24px;
  border: 1px solid rgba(94, 136, 171, 0.32);
  border-radius: 22px;
  resize: vertical;
  background: rgba(5, 10, 18, 0.9);
  color: #edf6ff;
  font: inherit;
  line-height: 1.75;
  outline: none;
}

textarea:focus {
  border-color: rgba(99, 230, 255, 0.54);
  box-shadow: 0 0 0 4px rgba(54, 186, 255, 0.1);
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 24px;
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

  .input-shell {
    margin-top: 40px;
    padding: 24px 0 0;
  }

  .prompt-hero.compact .input-shell {
    padding: 32px 18px;
  }

  textarea {
    min-height: 220px;
    padding: 18px;
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

  .input-shell {
    width: 100%;
  }
}
</style>
