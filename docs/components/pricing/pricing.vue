<script setup>
defineProps({
  pricingPlan: {
    type: Object,
    default: () => [],
  },
})

</script>

<template>
  <div class="container-p">

    <div class="pricing-top-info">
      <h1 class="pricing-top-title">{{ pricingPlan.title }}</h1>
      <p class="pricing-top-desc">{{ pricingPlan.tagline }}</p>
    </div>

    <div class="cards">
      <div class="card" v-for="card in pricingPlan.cards" :key="card.package">

        <div class="card-head">
          <h4 class="card-head-package">{{ card.package }}</h4>
          <div class="price-badge-container">
            <h1 class="card-head-price">{{ card.price }}</h1>
            <span class="badge-price">{{ card.badge }}</span>
          </div>
          <p class="text-tagline">{{ card.tagline }}</p>
        </div>

        <div class="card-body">
          <ul class="list-style">
            <li v-for="list in card.features" :key="list">
              <p class="text-light">{{ list }}</p>
            </li>
          </ul>
        </div>

        <div class="card-footer">
          <a class="pricing-action" :href="card.link">{{ card.buttonText }}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  width: 0 !important;
}

.container-p {
  max-width: 1152px;
  position: relative;
  display: flex;
  margin: auto;
  padding: 0 32px;
  flex-direction: column;

  .pricing-top-info {
    padding: 96px 16px 64px;
    width: 75%;

      .pricing-top-title {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: normal;
      }

      .pricing-top-desc {
        max-width: 44rem;
        padding-top: 24px;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.7;
        color: var(--vp-c-text-2);
      }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .card {
      background-color: var(--vp-c-bg);
      border: 1px solid var(--vp-c-divider);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      transition: border-color 150ms ease;

      &:hover {
        border-color: var(--vp-c-border);
      }

      .card-head-package{
        color: var(--vp-button-brand-text);
        font-weight: 600;
        text-transform: uppercase;
        font-size: .75rem;
        letter-spacing: normal;
        background: var(--vp-button-brand-bg);
        padding: 2px 8px;
        border-radius: 4px;
        margin-right: auto;
      }

      .price-badge-container {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        padding-top: 24px;
      }

      .card-head-price{
        font-size: 42px;
        font-weight: 600;
      }
      .badge-price {
        margin-left: .5rem;
        color: var(--vp-c-text-2);
        font-weight: 400;
      }

      .text-tagline{
        color: var(--vp-c-text-2);
        padding-top: 24px;
      }
      .card-head {
        padding: 24px 32px;
        border-bottom: 1px solid var(--vp-c-divider);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 24px;
      }

      .card-body {
        height: 100%;
        padding: 32px 32px;

        .list-style{
          list-style: none;
          padding-left: 0;
        }

        .text-light {
          font-size: .875rem;
          font-weight: 400;
          color: var(--vp-c-text-1);
          line-height: 1.6;
        }
      }

      .card-footer {
        padding: 24px;
      }

      .pricing-action {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        width: 100%;
        padding: 0 20px;
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
    }
  }
}

@media (max-width: 960px) {
  .container-p {
    .pricing-top-info {
      width: 100%;
      padding-top: 60px;
      padding-bottom: 40px;
    }

    .cards {
      display: flex;
      flex-direction: column;

      .card {
        min-width: fit-content;
      }
    }
  }

}

@media (max-width: 719px) {
  .container-p {
    padding: 0 24px;
  }
}
</style>
