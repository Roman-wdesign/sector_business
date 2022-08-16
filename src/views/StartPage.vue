<template>
  <div class="container" style="background-color: white">
    <div class="content">
      <div class="grid">
        <mcv-product-list />
      </div>
    </div>
  </div>
</template>

<script>
import McvProductList from "@/components/ProductList";

export default {
  name: "McvStartPage",

  components: { McvProductList },
  data: () => ({}),
};
</script>

<style scoped></style>
