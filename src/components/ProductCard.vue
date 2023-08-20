<template>
  <div v-if="product">
    <div class="box">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="text">
        <span class="status">{{ product.status }}</span>
        <router-link
          :to="{ name: 'productDetails', params: { id: product.id } }"
          class="title"
          >{{ product.title }}</router-link
        >
        <div class="info">
          <div class="details">
            <span>{{ product.category }}</span
            >,
            <span>{{ product.publishedAt.slice(0, 10) }}</span>
          </div>

          <div class="favorite" @click="addToFavorites(product)">
            <unicon name="heart" width="25" height="25" class="icon" :fill="active ?  'red' : '#222'"></unicon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from "vuex";
export default {
  name: "productCard",
  props: {
    product: Object,
  },

  setup() {
    const store = useStore();
    const active = ref(false)

    const addToFavorites = (ele) => {
        const isExist = store.state.favorites.find(item => item.id === ele.id)
        if (isExist) {
            store.commit("removefromFavorite", ele.id)
            active.value = false
        }else {
            store.commit("addToFavorites", ele);
            active.value = true
        }
    };

    return { addToFavorites, active };
  },
};
</script>

<style scoped>
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
font-weight: 600;
font-size: 20px;
display: block;
}

.favorite {
    cursor: pointer;
}
</style>
