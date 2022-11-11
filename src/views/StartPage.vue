<template>
  <body id="white-body">
  <div class="container">
    <div class="content">
      <div class="grid">
        <mcv-product-list />
      </div>
    </div>
  </div>
  </body>

</template>

<script>
import McvProductList from "@/components/ProductList";

export default {
  name: "McvStartPage",

  components: { McvProductList },
  data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
