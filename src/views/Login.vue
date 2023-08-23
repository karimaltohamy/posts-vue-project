<template>
  <div class="login">
    <h3>Login</h3>
    <form action="">
        <input type="text" placeholder="write email" v-model="loginInputs.email">
        <input type="password" placeholder="write password" v-model="loginInputs.password">
        <button type="submit" @click.prevent="login">Login</button>
        <router-link to="/register" class="text-center mt-2 d-block">you want create an account?</router-link>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: "loginView",
  setup() {
    const loginInputs = ref({})
    const store = useStore()

    const login = () => {
        store.dispatch("login", loginInputs.value)
    }

    return{loginInputs, login}
  }
};
</script>

<style scoped>
.login {
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
    background-color: #43B983;
    color: white;
    border: none;
    border-radius: 7px;
}
</style>
