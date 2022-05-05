<template>
  <div class="container">
    <div class="wrap">
      <div class="header">
        <mcv-search/>
      </div>
      <div class="content">
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
  components: {McvSearch, McvProductList},
  data: () => ({}),
}
</script>

<style scoped>

</style>