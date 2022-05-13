<template>
  <div class="container">
    <div class="wrap">
      <div class="header">
      </div>
      <div class="content">
        <mcv-product-list/>
      </div>
    </div>
  </div>
</template>

<script>
import McvProductList from "@/components/ProductList";



export default {
  name: "McvHome",
  components: {McvProductList},
  data: () => ({}),
}
</script>

<style scoped>

</style>