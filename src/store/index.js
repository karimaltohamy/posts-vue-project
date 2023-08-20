import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productDetails: {},
    favorites: [],
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
  },
});
