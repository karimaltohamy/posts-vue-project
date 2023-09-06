<template>
  <div class="mt-3">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="search..."
        @input="handleSearch"
      />
      <select class="form-select sort" id="inputGroupSelect01" @change="handleSort">
        <option selected>Choose...</option>
        <option value="asc">ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "filterView",
  props: {
    filters: Object
  },
  emits: ["set-filters"],
  setup(props, context) {
    console.log(props.filters);
    const handleSearch = (e) => {
      context.emit("set-filters", {
        ...props.filters,
        search: e.target.value,
      });
    };

    const handleSort = (e) => {
        context.emit("set-filters", {
        ...props.filters,
        sort: e.target.value,
      });
    }
    return { handleSearch, handleSort };
  },
};
</script>

<style>
.sort {
  flex: unset !important;
  min-width: 200px !important;
}
</style>
