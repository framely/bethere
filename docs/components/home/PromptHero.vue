<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

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
  <section class="prompt-hero">
    <div class="shell">
      <h1>Build trustworthy user-facing agent</h1>
      <p class="tagline">BeThere for your users, where and when they need you.</p>

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
}

.shell {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin: 0;
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  font-size: clamp(3rem, 7vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: #f7fbff;
}

.tagline {
  margin: 28px auto 0;
  max-width: 34rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.55;
  color: #d8e6f3;
}

.input-shell {
  margin-top: 52px;
  padding: 32px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  text-align: left;
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

  .input-shell {
    margin-top: 40px;
    padding: 24px 0 0;
  }

  textarea {
    min-height: 220px;
    padding: 18px;
  }
}
</style>
