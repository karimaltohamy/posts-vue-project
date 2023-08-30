<template>
  <div class="products">
    <div class="container">
      <h3>products</h3>

      <div class="boxs" v-if="products">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "productsPage",
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();
    const products = computed(() => {
      return store.state.products.slice(0, 50);
    });

    const getAllProducts = async () => {
      store.dispatch("getAllProducts");
      
    };

    onMounted(() => {
      getAllProducts();
    });

    return { products };
  },
};
</script>

<style>
.products .boxs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.products .boxs .box img {
  width: 100%;
  height: 250px;
  border-radius: 10px;
}

.products .boxs .box .details span {
  color: gray;
  font-size: 14px;
}
</style>
