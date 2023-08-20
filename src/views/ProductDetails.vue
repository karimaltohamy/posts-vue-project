<template>
  <div v-if="productDetails" class="container mt-3">
    <div class="line ">
        <div class="image">
            <img :src="productDetails.image" alt="" loading="lazy">
        </div>
        <div class="text ">
            <h2 class="title">{{ productDetails.title }}</h2>
            <div class="details">
                <span>{{ productDetails.category }}</span> ,
                <span>{{ productDetails.status }}</span>, 
                <span>{{ productDetails.publishedAt }}</span>
            </div>
            <p class="desc">{{ productDetails.content }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
   name: "productDetails",
   setup() {
    const store = useStore()
    const route = useRoute()
    const productDetails = computed(() => {
        return store.state.productDetails
    });

   onMounted(() => {
    store.dispatch("getSingleProduct", route.params.id)
   })

    return {productDetails} 
   }
}
</script>

<style>
.line {
    text-align: center;
}
.line .image {
    margin-bottom: 20px;
}

.line .image img {
    height: 300px;
    max-width: 700px;
    width: 100%;
    border-radius: 10px;
}

.line .text .title {
    font-size: 35px;
}

.line .text .details{
    color: rgb(83, 83, 83);
    font-size: 15px;
    margin-bottom: 10px;
}

.line .text .desc {
    font-size: 14px;
    color: gray;
}




</style>



