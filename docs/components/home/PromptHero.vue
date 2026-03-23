<script setup>
import { ref } from 'vue'

const prompt = ref('Build a support agent for our fitness studio that handles membership questions, reschedules classes, and escalates billing issues to a human when confidence is low.')
</script>

<template>
  <section class="prompt-hero">
    <div class="shell">
      <h1>Build trustworthy user-facing agent</h1>
      <p class="tagline">Always be.there, where and when your users need you.</p>

      <div class="input-shell">
        <label for="home-agent-prompt">What should your user-facing agent do?</label>
        <textarea
          id="home-agent-prompt"
          v-model="prompt"
          spellcheck="false"
          placeholder="Build a trustworthy user-facing agent for..."
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
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 56px 24px 88px;
  color: #f4f7fb;
  background:
    radial-gradient(circle at 20% 0%, rgba(84, 210, 255, 0.16), transparent 28%),
    radial-gradient(circle at 82% 12%, rgba(151, 136, 255, 0.12), transparent 24%),
    linear-gradient(180deg, #060b13 0%, #08111d 100%);
}

.shell {
  max-width: 920px;
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
  margin: 22px auto 0;
  max-width: 40rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.45;
  color: #d8e6f3;
}

.input-shell {
  margin-top: 36px;
  padding: 28px;
  border: 1px solid rgba(99, 154, 194, 0.22);
  border-radius: 28px;
  background: rgba(10, 18, 31, 0.86);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
  text-align: left;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #f4f7fb;
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
  margin-top: 18px;
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
    padding: 36px 18px 64px;
  }

  .input-shell {
    padding: 20px;
  }

  textarea {
    min-height: 220px;
    padding: 18px;
  }
}
</style>
