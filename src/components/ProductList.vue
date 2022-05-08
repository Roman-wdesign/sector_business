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

          :page-number="pageNumber"
          :total="totalPages"
          :limit="limit"
          :current-page="currentPage"
          :url="baseUrl"
          @forwardPage="forwardPage"
          @prevPage="prevPage"
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
  data: () => ({
    pageNumber:5
  }),
  name: "McvProductList",
  components: {McvProduct, McvPagination},
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    totalPages() {
      return this.PRODUCTS.length;
    },

    paginatedData() {
      let start = (this.currentPage - 1) * limit;
      let end = start + this.limit;
      return this.PRODUCTS.slice(start, end)
    },
    limit() {
      return limit
    },
    baseUrl() {
      return this.$route.path
    },

    currentPage() {
       console.log(this.$route)
      //Number(this.pageNumber || '5')
      return Number(this.pageNumber || '5')
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    // linkPage(){
    //   return Number(this.$route.query.page || '5')
    // },
    forwardPage() {
      this.pageNumber++;
    },
    prevPage() {

      this.pageNumber--;
    }
  },

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
}
</script>

<style scoped>
</style>