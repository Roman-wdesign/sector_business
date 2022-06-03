<template>
  <div>
    <div class="search">
      <input
          v-model="search"
          type="text"
          class="search__input"
          placeholder="Поиск"
      >
    </div>
    <div>
      <ul class="myTable">
        <li
            class="myTable__id"
            v-for="sortItem in  Object.keys(orderedListOptions)"
            :key="sortItem"
            @click="sortOrder = sortItem"
            :class="{active: sortOrder === sortItem}"
        >

          {{ sortItem }}
          <div class="arrow"></div>
        </li>

      </ul>
    </div>
    <mcv-product
        v-for="(product, index) in filteredList"
        :product_data="product"
        :key="index"
    />
    <mcv-pagination
        :total="totalPages"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
    />
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
    search:'',
    sortOrder: "ID",
  }),
  name: "McvProductList",
  components: {McvProduct, McvPagination},
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),

    sortedArray(sortOrder) {
      return this.orderedListOptions[sortOrder]()
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    filteredList (){
      return this.sortedArray(this.sortOrder).filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    orderedListOptions: function () {
      return {
        "ID": () => {
          //Default
          return this.paginatedData
        },
        "Заголовок": () => {
          //A-Z
          return this.paginatedData.slice().sort(
              function (a, b) {
                if (a.title > b.title) {
                  return 1;
                }
                if (a.title < b.title) {
                  return -1;
                }
                return 0;
              }
          )
        },
        "Описание": () => {
          //Z-A
          return this.paginatedData.slice().sort().reverse()
        },
      }
    },
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
      return Number(this.$route.query.page || '1')
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
}
</script>

<style scoped>
</style>