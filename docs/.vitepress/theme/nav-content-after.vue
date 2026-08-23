<template #nav-bar-content-after>
  <a class="button-start" href="https://buildmate.bethere.ai">
    Start to build
  </a>
</template>

<style lang="scss">
.button-start {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  margin-left: 24px;
  margin-right: 24px;
  padding: 0 20px;
  line-height: 1;
  text-align: center;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);

  &:hover {
    color: var(--vp-button-brand-hover-text);
    border-color: var(--vp-button-brand-hover-border);
    background-color: var(--vp-button-brand-hover-bg);
  }
}

@media (max-width: 767px) {
  .button-start {
    min-height: 36px;
    margin-right: 8px;
    margin-left: 8px;
    padding: 0 14px;
    font-size: 13px;
  }
}
</style>
