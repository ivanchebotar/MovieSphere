<template>
  <div class="search-bar">
    <input type="search" v-model="searchQuery" placeholder="Search movies..." />
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: "",
      isModalVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
