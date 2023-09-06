<template>
  <div class="header" v-if="user">
    <div class="container">
      <div class="logo">
        <h3>Gaelle</h3>
      </div>
      <div class="info">
        <div class="links">
          <router-link class="link" to="/">{{ $t("Home") }}</router-link>
          <router-link class="link" to="/products">{{$t("Products")}}</router-link>
        </div>
        <button class="btn_logout"  @click="logout">{{$t("Logout")}}</button>
        <select name="" id="" v-model="lang" @change="handleChangeLang($event)">
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
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
    const lang = computed(() => {
      return store.state.lang
    })
       

    const logout = () => {
      store.dispatch("logout");
    };

    const handleChangeLang = (e) => {
      store.commit("changeLang",e.target.value)
      window.location.reload()
    }

    return { logout, user, handleChangeLang , lang};
  },
};
</script>

<style lang="scss">
.header {
  padding: 10px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;
      gap: 10px;
    }


  }
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
