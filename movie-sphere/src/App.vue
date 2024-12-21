<template>
  <SiteHeader />
  <div class="page-holder">
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";

export default {
  name: 'App',
  components: {
    SiteHeader,
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
