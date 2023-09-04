<template>
    <div class="container mt-5">
      <h2 class=" text-center">Implement jQuery DataTable in Vue Js</h2>
      <table class="table" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Product content</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.publishedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { onMounted, ref } from "vue";

export default {
  name: "tableView",
  setup() {
    const products = ref([]);

    onMounted(() => {
        
      fetch("https://jsonplaceholder.org/posts").then((res) => res.json()).then((data) => {
        products.value = data;
        $("#datatable").DataTable();
      });
    });

    return { products };
  },
};
</script>

<style></style>
