<template>
<div class="canvas-main" :style="{backgroundColor: color}">
<div class="container" >
  <div class="content">
    <div class="grid"  >
      <mcv-product-list />
    </div>
  </div>
</div>
</div>



</template>

<script>
import McvProductList from "@/components/ProductList";

export default {
  name: "McvStartPage",

  components: { McvProductList },
  data: () => ({
    color: '#ffffff',

  }),
};
</script>

<style lang="scss" scoped></style>
