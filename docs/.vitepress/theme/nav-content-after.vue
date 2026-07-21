<template #nav-bar-content-after>
  <a href="https://buildmate.bethere.ai">
    <button class="button-start">
      Start to build
    </button>
  </a>
</template>

<style lang="scss">
.button-start {
  margin-left: 24px;
  margin-right: 24px;
  padding: 0 20px;
  line-height: 32px;
  text-align: center;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-c-brand);

  &:hover {
    background: var(--vp-c-brand-light);
  }
}
</style>
