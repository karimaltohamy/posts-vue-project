<template>
  <div class="header" v-if="user">
    <div class="container">
      <div class="logo">
        <h3>Gaelle</h3>
      </div>
      <div class="info">
        <div class="links">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/products">Products</router-link>
        </div>
        <button class="btn_logout" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "headerCom",
  setup() {
    const store = useStore();
    const user = computed(() => {
      return store.state.user;
    });

    const logout = () => {
      store.dispatch("logout");
    };

    return { logout, user };
  },
};
</script>

<style>
.header {
  padding: 10px 0;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .container .links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header .info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header .container .links .link.router-link-exact-active {
  color: #42b983 !important;
}

.btn_logout {
  padding: 4px 20px;
  font-size: 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
