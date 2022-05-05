<template>
  <div class="footer">
    <button
        @click="prevPage"
        class="footer-back"
        :disabled="pageNumber === 1"
    >
      Назад
    </button>
    <ul class="pagination">
      <li
          v-for="page in pages"
          class="pagination__item"
          :class="{active: currentPage === page}"
          :key="page"
      >
        <router-link
            class="pagination__link"
            :to="{path: url, query:{page:page}}">
          {{ page }}
        </router-link>
      </li>
    </ul>
    <button
        @click="forwardPage"
        class="footer-forward"
        :disabled="pageNumber >= this.pages.length"
    >
      Далее
    </button>
  </div>
</template>

<script>
import {range} from "@/helpers/utils";

export default {
  name: "McvPagination",
  props: {
    pageNumber: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    forwardPage() {
      this.$emit('forwardPage')
    },
    prevPage() {
      this.$emit('prevPage')
    }
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  },
}
</script>

<style scoped>

</style>