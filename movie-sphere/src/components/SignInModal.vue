<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal">
      <h2>Sign In</h2>
      <div class="form">
        <form @submit.prevent="handleSignIn">
          <div class="form-group">
            <div class="input-group">
              <input type="email" id="email" placeholder="Email:" v-model="email" required />
            </div>
            <div class="input-group">
              <input type="password" id="password" placeholder="Password:" v-model="password" required />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn--primary">Sign In</button>
            <button type="button" @click="closeModal" class="btn btn--close">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="white"/>
              </svg>
            </button>
          </div>
        </form>
        <p>New to MovieSphere? <a href="#">Sign Up</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    handleSignIn() {
      // Handle sign-in logic here
      console.log(`Signing in with ${this.email} and ${this.password}`);
      this.closeModal();
    },
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($primary, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  padding: 30px 30px 50px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  color: $secondary;
  position: relative;
  top: 0;
  left: 0;

  @include media('>=tablet') {
    padding: 35px 35px 50px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    background-position: 0 0;
    z-index: -1;
    background-color: rgba($secondary, 0.1);
    border-radius: 10px;
  }

  h2 {
    margin: 0 0 40px;
  }
}

form {
  margin: 0 0 40px;
}

.form-group {
  margin: 0 0 40px;
}

.btn {
  display: block;
  width: 100%;

  &--close {
    background-color: transparent;
    width: auto;
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
  }
}

.input-group {
  margin: 0 0 20px;
}

p {
  color: rgba($secondary, 0.8);
  margin: 0;
}

</style>
