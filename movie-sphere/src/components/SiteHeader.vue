<template>
  <header class="header">
    <div class="container container--fluid">
      <div class="header-holder">
        <router-link to="/" class="logo">
          <a href="#" class="logo-link">
            <img src="./../assets/images/logo.svg" alt="MovieSphere Logo">
          </a>
        </router-link>
        <div class="account">
          <button class="btn btn--primary btn--round" @click="toggleModal">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.12104 15.8037C5.15267 14.6554 7.4998 14 10 14C12.5002 14 14.8473 14.6554 16.879 15.8037M13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
          </button>
        </div>
        <SignInModal v-if="isModalVisible" :isVisible="isModalVisible" @close="toggleModal" />
      </div>
    </div>
  </header>
</template>

<script>
import SignInModal from "./SignInModal.vue";

export default {
  data() {
    return {
      searchQuery: "",
      isModalVisible: false,
    };
  },
  components: {
    SignInModal,
  },
  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  width: 140px;

  @include media('>=tablet') {
    width: 148px;
  }

  img {
    width: 100%;
  }
}
</style>
