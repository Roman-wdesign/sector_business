<template>
<div class="item">

  <div class="about__header">{{ product_data.id }}</div>
  <div class="about__description">{{ product_data.title }}</div>
  <div class="about__header">{{ product_data.body }}</div>
</div>
</template>

<script>
export default {
  name: "McvProduct",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>