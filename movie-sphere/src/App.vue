<template>
  <SiteHeader />
  <SiteHeroSection />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteHeroSection from "./components/SiteHeroSection.vue";

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteHeroSection
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $body-bg;
}
</style>
