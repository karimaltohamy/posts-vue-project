<template>
  <Header />
  <router-view/>
</template>
<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import Header from "./components/Header"

  export default {
    setup() {
      const store = useStore()

      onBeforeMount(() => {
        store.dispatch("fetchUser")
      })

    },
    components: {
      Header,
    }
  
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}


/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
