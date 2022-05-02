<template>
  <div class="container">
    <div class="wrap">
      <div class="header">
        <mcv-search/>
      </div>
      <div class="content">
        <mcv-product-list/>
      </div>
      <mcv-footer/>
    </div>
  </div>
</template>

<script>
import McvProductList from "@/components/ProductList";
import McvSearch from "@/components/Search";
import McvFooter from "@/views/Footer";

export default {
  name: "McvHome",
  components: {McvFooter, McvSearch, McvProductList}
}
</script>

<style scoped>

</style>