<template>
  <div class="register">
    <h3>Register</h3>
    <form action="">
      <input
        type="text"
        placeholder="write email"
        v-model="registerInputs.email"
      />
      <input
        type="password"
        placeholder="write password"
        v-model="registerInputs.password"
      />
      <button type="submit" @click.prevent="register">Register</button>
      <router-link to="/login" class="text-center mt-2 d-block">You have already account?</router-link>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "registerView",
  setup() {
    const registerInputs = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", registerInputs.value);
    };

    return { registerInputs, register };
  },
};
</script>

<style scoped>
.register {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

form {
    max-width: 500px;
}

form input {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid rgb(199, 198, 198);
  border-radius: 6px;
  padding: 5px;
}

form button {
  padding: 5px;
  width: 100%;
  background-color: #43b983;
  color: white;
  border: none;
  border-radius: 7px;
}
</style>
