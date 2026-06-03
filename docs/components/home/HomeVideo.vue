<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="home-video" aria-label="Buildmate product video">
    <div class="home-video-shell">
      <video
        class="home-video-player"
        :src="src"
        :poster="poster"
        controls
        preload="metadata"
        playsinline
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-video {
  padding: 0 24px 88px;
  background: var(--vp-c-bg);
}

.home-video-shell {
  max-width: 960px;
  margin: 0 auto;
}

.home-video-player {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: #000;
}

@media (max-width: 719px) {
  .home-video {
    padding: 0 18px 64px;
  }
}
</style>
