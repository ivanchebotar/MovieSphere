<template>
  <section class="hero-section">
    <video class="hero-bg" autoplay muted loop id="myVideo">
      <source src="./../assets/video/hero-video.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div class="hero-content">
      <h1>Your guide for movies, TV shows & sports</h1>
      <SearchInput />
    </div>
  </section>
</template>


<script>
import SearchInput from "./SearchInput.vue";

export default {
 components: {
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

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    margin: 0 0 60px;
  }
}
</style>