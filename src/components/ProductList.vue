<template>
  <div>
    <p>Prod list</p>
    <mcv-product
        v-for="(product, index) in PRODUCTS"
        :product_data="product"
        :key="index"
    />
  </div>
</template>

<script>
import McvProduct from "@/components/Product";
import {mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({}),
  name: "McvProductList",
  components: {McvProduct},
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
}
</script>

<style scoped>

</style>