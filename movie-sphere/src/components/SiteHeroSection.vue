<template>
  <section class="hero-section">
    <video autoplay muted loop id="myVideo">
      <source src="./../assets/video/hero-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </section>
</template>


<script>
import SearchInput from "./SearchInput.vue";

export default {
 component: {
  SearchInput
 }
}
</script>

<style scoped lang="scss">
.hero-section {
  height: 100vh;
}

video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}
</style>