<template>
  <div class="products pb-3">
    <div class="container">
      <h3>products</h3>

      <Filters :filters="filters" @set-filters="handleFilter" />
      <div class="boxs" v-if="filtersProducts">
        <ProductCard
          v-for="(product, index) in filtersProducts.length > 0
            ? filtersProducts
            : products"
          :key="index"
          :product="product"
        />
      </div>
      <div class="text-center">
        <button class="btn btn-primary mt-5 m-auto" @click="handlePerPage">
          Lead More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import Filters from "../components/Filters.vue";

export default {
  name: "productsPage",
  components: {
    ProductCard,
    Filters,
  },
  setup() {
    const store = useStore();
    const products = computed(() => {
      return store.state.products.slice(0, perPage.value * 10);
    });
    const filtersProducts = ref([]);
    const filters = reactive({
      search: "",
      sort: "",
    });
    const perPage = ref(1);

    const getAllProducts = async () => {
      store.dispatch("getAllProducts");
      filtersProducts.value = store.state.products.slice(0, perPage.value * 10);
    };

    onMounted(() => {
      getAllProducts();
      console.log(products.value);
    });

    const handleFilter = (f) => {
      filters.search = f.search;
      filters.sort = f.sort;

      let newProducts = products.value.filter((product) =>
        product.title.toLowerCase().includes(f.search.toLowerCase())
      );

      if (filters.sort === "asc" || filters.sort === "desc") {
        newProducts.sort((a, b) => {
          const sortOrder = filters.sort === "asc" ? 1 : -1;
          const aValue = a.publishedAt;
          const bValue = b.publishedAt;

          if (aValue > bValue) {
            return sortOrder;
          } else if (aValue < bValue) {
            return -sortOrder;
          } else {
            return 0;
          }
        });
      }

      filtersProducts.value = newProducts;
    };

    watch([perPage], () => {
      getAllProducts();
    });

    const handlePerPage = () => {
      perPage.value = perPage.value + 1;
    };

    return { products, filters, handleFilter, filtersProducts, handlePerPage };
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
