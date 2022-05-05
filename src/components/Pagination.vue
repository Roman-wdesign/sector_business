<template>
  <div class="footer">
    <button class="footer-back">Назад</button>
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
    <button class="footer-forward">Далее</button>
  </div>
</template>

<script>
import {range} from "@/helpers/utils";

export default {
  name: "McvPagination",
  props: {
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