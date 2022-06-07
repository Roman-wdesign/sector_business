<template>
  <div class="land">
    <div class="wrap">
      <div class="header">
      </div>
      <div class="content">
        <div class="myLinkStyle">
          <router-link
              style="text-decoration: none;"
              :to="{name: 'home'}"
          >Go to Home
          </router-link>
        </div>

        <mcv-product-list/>
      </div>
    </div>
  </div>
</template>

<script>
import McvProductList from "@/components/ProductList";

export default {
  name: "McvStartPage",

  components: {McvProductList},
  data: () => ({}),
}
</script>

<style scoped>

</style>