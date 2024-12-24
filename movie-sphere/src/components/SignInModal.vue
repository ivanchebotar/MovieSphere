<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal">
      <h2>{{ isSignUpMode ? 'Sign Up' : 'Sign In' }}</h2>
      <div class="form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <div class="input-group" v-if="isSignUpMode">
              <input type="text" id="name" placeholder="User name:" v-model="name" required />
            </div>
            <div class="input-group">
              <input type="email" id="email" placeholder="Email:" v-model="email" required />
            </div>
            <div class="input-group">
              <input type="password" id="password" placeholder="Password:" v-model="password" required autocomplete="current-password" />
            </div>
            <div class="input-group" v-if="isSignUpMode">
              <input type="password" id="confirmPassword" placeholder="Confirm Password:" v-model="confirmPassword" required autocomplete="new-password" />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn--primary">
              {{ isSignUpMode ? 'Sign Up' : 'Sign In' }}
            </button>
            <button type="button" @click="closeModal" class="btn btn--close"></button>
          </div>
        </form>

        <div class="form-group">
          <button @click="handleGoogleSignIn" class="btn btn--google">
            Sign in with Google
          </button>
        </div>

        <p>
          {{ isSignUpMode ? 'Already have an account?' : 'New to MovieSphere?' }}
          <a href="#" @click.prevent="toggleMode">{{ isSignUpMode ? 'Sign In' : 'Sign Up' }}</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/assets/js/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  name: "SignInModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isSignUpMode: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    toggleMode() {
      this.isSignUpMode = !this.isSignUpMode;
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
    closeModal() {
      this.$emit("update:isVisible", false);
    },
    async handleSignUp() {
      console.log("Sign up attempt");
      if (!this.email || !this.password || !this.confirmPassword) {
        alert("Please fill in all fields!");
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("User registered:", userCredential.user);
        this.closeModal();
      } catch (error) {
        console.error("Error registering user:", error.message);
        alert("Error registering user: " + error.message);
      }
    },

    async handleSignIn() {
      console.log("Sign in attempt");
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log("User signed in:", userCredential.user);
        this.closeModal();
      } catch (error) {
        console.error("Error signing in:", error.message);
        alert("Error signing in: " + error.message);
      }
    },
    async handleGoogleSignIn() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User signed in with Google:", user);
        this.closeModal();
      } catch (error) {
        console.error("Error signing in with Google:", error.message);
        alert("Error signing in with Google: " + error.message);
      }
    },
    handleSubmit() {
      if (this.isSignUpMode) {
        this.handleSignUp();
      } else {
        this.handleSignIn();
      }
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
