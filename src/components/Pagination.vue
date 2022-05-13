<template>
  <div class="footer">

    <router-link
        :to="{path: url,query:{page:goPrev}}"
        class="footer-back"
        :disabled="!stopPrev"
        :event="stopPrev ? 'click' : ''"
    >
      Назад
    </router-link>
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

    <router-link
        class="footer-forward"
        :to="{path: url,query:{page:this.goForward}}"
        :disabled="!stopForward"
        :event="stopForward ? 'click' : ''"
    >
      Далее
    </router-link>
  </div>
</template>

<script>
import {range} from "@/helpers/utils";
import {step} from "@/helpers/vars";

export default {
  name: "McvPagination",
  data: () => ({isDisabled: true}),
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
  methods: {},
  computed: {
    step() {
      return step
    },
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    },
    goForward() {
      return `${this.currentPage + this.step}`
    },
    goPrev() {
      return `${this.currentPage - this.step}`
    },
    stopForward() {
      return this.currentPage + 1 <= this.pages.length
    },
    stopPrev() {
      return this.currentPage >= 2
    }
  },
}
</script>

<style scoped>

</style>