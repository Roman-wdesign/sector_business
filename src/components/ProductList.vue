<template>
  <div>

    <div>
      <div class="table">
        <div class="table__id">ID
          <div class="arrow"></div>
        </div>
        <div class="table__header">Заголовок
          <div class="arrow"></div>
        </div>
        <div class="table__description">Описание
          <div class="arrow"></div>
        </div>
      </div>

      <mcv-product
          v-for="(product, index) in paginatedData"
          :product_data="product"
          :key="index"
      />
      <mcv-pagination
          :total="PRODUCTS.length"
          :limit="limit"
          :current-page="currentPage"
          :url="baseUrl"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import McvProduct from "@/components/Product";
import McvPagination from "@/components/Pagination";
import {limit} from "@/helpers/vars";


export default {
  props: {},
  data: () => ({}),
  name: "McvProductList",
  components: {McvProduct, McvPagination},
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    paginatedData() {
      let from = (this.currentPage - 1) * limit;
      let to = from + this.limit;
      return this.PRODUCTS.slice(from, to)
    },
    limit() {
      return limit
    },
    baseUrl() {
      return this.$route.path
    },
    currentPage() {
      return Number(this.$route.query.page || '5')
    },
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