import { createStore } from "vuex";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from "@/router";
export default createStore({
  state: {
    products: [],
    productDetails: {},
    favorites: [],
    user: null
  },
  mutations: {
    allProducts(state, payload) {
      state.products = payload;
    },
    productDetails(state, payload) {
      state.productDetails = payload;
    },
    addToFavorites(state, payload) {
      state.favorites.push(payload)
    },
    removefromFavorite(state, payload) {
      state.favorites = state.favorites.filter(item => item.id !== payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    clearUser(state) {
      state.user = null
    }
  },
  actions: {
    getAllProducts(context) {
      fetch("https://jsonplaceholder.org/posts")
        .then((res) => res.json())
        .then((data) => {
          context.commit("allProducts", data);
        })
        .catch((error) => console.log(error));
    },
    getSingleProduct(context, payload) {
      fetch(`https://jsonplaceholder.org/posts/${payload}`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("productDetails", data);
        })
        .catch((error) => console.log(error));
    },
    async login({commit}, payload) {
      const {email, password} = payload
      try {
        await signInWithEmailAndPassword(auth, email, password)

        commit("setUser", auth.currentUser)
        router.push("/")
      } catch (error) {
        alert(error.code)
      }
    },
    async register({commit}, payload) {
      const {email, password} = payload
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert(error.code)
      }

      commit("setUser", auth.currentUser)
      router.push("/")
    },
    async logout({commit}, ) {
      try {
        await signOut(auth)

        commit("clearUser")
        router.push("/login")
      } catch (error) {
        alert(error.code)
      }
    },
    fetchUser ({commit}) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit("clearUser")
        }else {
          commit("setUser", user)

          if (router.isReady() && router.currentRoute.value.path === "/login") {
            router.push("/")
          }
        }
      })
    }
  },
});
