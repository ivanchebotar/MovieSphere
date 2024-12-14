<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal">
      <h2>Sign In</h2>
      <div class="form">
        <form @submit.prevent="handleSignIn">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn--primary">Sign In</button>
          <button type="button" @click="closeModal" class="btn btn--primary">Cancel</button>
        </form>
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
  background-color: rgba($primary, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-image: url('@/assets/images/img01.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 1rem;
}
</style>
