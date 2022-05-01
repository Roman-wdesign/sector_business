<template>
  <div class="container">
    <div class="header">
      <div class="home">
        <h1>Home</h1>
        <mcv-search/>
        <mcv-product-list/>
      </div>
    </div>
  </div>
</template>

<script>
import McvProductList from "@/components/ProductList";
import McvSearch from "@/components/Search";

export default {
  name: "McvHome",
  components: {McvSearch, McvProductList}
}
</script>

<style scoped>

</style>