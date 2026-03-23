<script setup>
import { computed, ref } from 'vue'

const prompt = ref('Build a support agent for our fitness studio that handles membership questions, reschedules classes, and escalates billing issues to a human when confidence is low.')

const promptIdeas = [
  'Build a concierge agent for our clinic that qualifies patient requests and books follow-ups.',
  'Create a multilingual retail agent that answers delivery questions and manages returns.',
  'Launch a property management agent that handles maintenance triage and status updates.',
]

const builderHref = computed(() => 'https://build.opencui.io/')

function applyIdea(idea) {
  prompt.value = idea
}
</script>

<template>
  <div class="landing-home">
    <section class="hero-band">
      <div class="hero-shell">
        <div class="hero-copy">
          <div class="eyebrow">BeThere</div>
          <h1>Build trustworthy user-facing agent</h1>
          <p class="tagline">Always be.there, where and when your users need you.</p>
          <p class="supporting">
            Start with a plain-language brief. Turn it into a structured, testable, multi-channel agent experience your team can actually trust.
          </p>

          <div class="trust-row">
            <span>Deterministic logic</span>
            <span>Business-aware understanding</span>
            <span>Launch everywhere</span>
          </div>
        </div>

        <div class="prompt-stage">
          <div class="prompt-shell">
            <div class="prompt-topline">
              <span class="signal" />
              <span class="prompt-kicker">Try BeThere</span>
            </div>

            <label class="prompt-label" for="agent-prompt">What should your agent do?</label>
            <textarea
              id="agent-prompt"
              v-model="prompt"
              class="prompt-box"
              spellcheck="false"
              placeholder="Build a trustworthy user-facing agent for..."
            />

            <div class="prompt-actions">
              <a :href="builderHref" class="primary-action" target="_blank" rel="noopener noreferrer">
                Start Building
              </a>
              <a href="/whyopencui/" class="secondary-action">
                See why it works
              </a>
            </div>

            <p class="prompt-note">
              Describe the workflow in natural language. BeThere handles refinement, reliability, and delivery across channels.
            </p>

            <div class="idea-chips">
              <button
                v-for="idea in promptIdeas"
                :key="idea"
                type="button"
                class="idea-chip"
                @click="applyIdea(idea)"
              >
                {{ idea }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="proof-band">
      <div class="proof-shell">
        <div class="proof-card large">
          <div class="card-header">
            <span class="mini-dot cyan" />
            <span>From brief to working agent</span>
          </div>
          <img src="/images/home/idea-to-working-agent.png" alt="Idea to working agent diagram" />
        </div>

        <div class="proof-stack">
          <div class="proof-card compact">
            <div class="compact-title">Reliable by design</div>
            <p>Programmed interaction logic and business-aware understanding keep real journeys consistent.</p>
          </div>
          <div class="proof-card compact">
            <div class="compact-title">Prompt-first creation</div>
            <p>Use plain language to define what the agent should do, then refine edge cases without rebuilding from scratch.</p>
          </div>
          <div class="proof-card compact">
            <div class="compact-title">Ready for every channel</div>
            <p>Launch the same core agent across web and messaging surfaces without forking your product logic.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.landing-home {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  color: #f4f7fb;
  background:
    radial-gradient(circle at 14% 10%, rgba(69, 186, 255, 0.16), transparent 26%),
    radial-gradient(circle at 82% 18%, rgba(144, 122, 255, 0.14), transparent 24%),
    linear-gradient(180deg, #060b13 0%, #08111d 42%, #09121f 100%);
}

.hero-band {
  position: relative;
  overflow: hidden;
  padding: 48px 32px 40px;
}

.hero-band::before,
.hero-band::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.hero-band::before {
  width: 360px;
  height: 360px;
  top: -160px;
  left: 6%;
  background: radial-gradient(circle, rgba(54, 203, 255, 0.22) 0%, rgba(54, 203, 255, 0) 72%);
}

.hero-band::after {
  width: 300px;
  height: 300px;
  right: 4%;
  top: 40px;
  background: radial-gradient(circle, rgba(151, 136, 255, 0.18) 0%, rgba(151, 136, 255, 0) 72%);
}

.hero-shell,
.proof-shell {
  max-width: 1240px;
  margin: 0 auto;
}

.hero-shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.hero-copy {
  position: relative;
  z-index: 1;
  padding: 40px 0 0;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid rgba(96, 229, 255, 0.18);
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9fdfff;
  background: rgba(10, 20, 33, 0.72);
}

.hero-copy h1 {
  margin: 22px 0 0;
  max-width: 11ch;
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  font-size: clamp(3.8rem, 8vw, 6.6rem);
  line-height: 0.93;
  letter-spacing: -0.05em;
  color: #f7fbff;
}

.tagline {
  margin: 24px 0 0;
  max-width: 38rem;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1.45;
  color: #d8e6f3;
  margin-left: auto;
  margin-right: auto;
}

.supporting {
  margin: 18px 0 0;
  max-width: 42rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #9db0c4;
  margin-left: auto;
  margin-right: auto;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}

.trust-row span {
  padding: 11px 14px;
  border: 1px solid rgba(91, 221, 255, 0.18);
  border-radius: 999px;
  font-size: 13px;
  color: #d5f0ff;
  background: rgba(11, 21, 34, 0.76);
}

.prompt-stage {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 920px;
}

.prompt-shell {
  position: relative;
  padding: 32px;
  border: 1px solid rgba(103, 176, 228, 0.18);
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(16, 28, 45, 0.96) 0%, rgba(10, 18, 32, 0.96) 100%);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
}

.prompt-shell::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 30px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(97, 228, 255, 0.45), rgba(47, 200, 190, 0.2), rgba(152, 137, 255, 0.34));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.prompt-topline {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  color: #b1c8dc;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.signal {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #63e6ff;
  box-shadow: 0 0 18px rgba(99, 230, 255, 0.72);
}

.prompt-label {
  display: block;
  margin-bottom: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #f4f7fb;
}

.prompt-box {
  width: 100%;
  min-height: 260px;
  padding: 24px 26px;
  border: 1px solid rgba(89, 133, 168, 0.32);
  border-radius: 24px;
  resize: vertical;
  background: rgba(6, 12, 20, 0.88);
  color: #edf6ff;
  font-size: 1.04rem;
  line-height: 1.75;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.prompt-box:focus {
  border-color: rgba(99, 230, 255, 0.56);
  box-shadow: 0 0 0 4px rgba(54, 186, 255, 0.1);
}

.prompt-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 20px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 154px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.primary-action {
  color: #06111e;
  background: linear-gradient(135deg, #63e6ff 0%, #32c6be 100%);
}

.secondary-action {
  color: #eef8ff;
  border: 1px solid rgba(113, 160, 196, 0.3);
  background: rgba(14, 24, 37, 0.8);
}

.primary-action:hover,
.secondary-action:hover,
.idea-chip:hover {
  transform: translateY(-1px);
}

.prompt-note {
  margin: 16px 0 0;
  color: #95a9bd;
  font-size: 0.94rem;
  line-height: 1.7;
}

.idea-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.idea-chip {
  padding: 10px 14px;
  border: 1px solid rgba(96, 229, 255, 0.16);
  border-radius: 999px;
  background: rgba(11, 21, 34, 0.78);
  color: #d9ebfb;
  font: inherit;
  font-size: 0.87rem;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
}

.proof-band {
  padding: 8px 32px 96px;
}

.proof-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 24px;
}

.proof-card {
  border: 1px solid rgba(91, 128, 158, 0.22);
  border-radius: 28px;
  background: rgba(9, 18, 31, 0.72);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.26);
}

.proof-card.large {
  padding: 18px;
}

.proof-card.large img {
  display: block;
  width: 100%;
  border-radius: 22px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 4px 16px;
  color: #dbe9f6;
  font-size: 0.96rem;
  font-weight: 600;
}

.mini-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.mini-dot.cyan {
  background: #63e6ff;
  box-shadow: 0 0 16px rgba(99, 230, 255, 0.6);
}

.proof-stack {
  display: grid;
  gap: 18px;
}

.proof-card.compact {
  padding: 24px;
}

.compact-title {
  margin-bottom: 10px;
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  font-size: 1.12rem;
  font-weight: 600;
  color: #f2f8ff;
}

.proof-card.compact p {
  margin: 0;
  color: #9db0c4;
  line-height: 1.8;
}

@media (max-width: 1100px) {
  .proof-shell {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    max-width: 10ch;
  }
}

@media (max-width: 719px) {
  .hero-band {
    padding: 28px 20px 28px;
  }

  .proof-band {
    padding: 12px 20px 72px;
  }

  .hero-copy {
    padding: 10px 0 0;
  }

  .hero-copy h1 {
    font-size: 3.2rem;
    max-width: 100%;
  }

  .prompt-shell {
    padding: 20px;
    border-radius: 24px;
  }

  .prompt-box {
    min-height: 200px;
    padding: 18px;
  }

  .proof-card.compact {
    padding: 20px;
  }
}
</style>
