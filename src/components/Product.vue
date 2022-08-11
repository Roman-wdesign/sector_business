<template>
  <div class="item">
    <div class="item__header">{{ product_data.id }}</div>
    <div class="item__description">{{ product_data.title }}</div>
    <div class="item__body">{{ product_data.body }}</div>
  </div>
</template>

<script>
export default {
  name: "McvProduct",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped></style>
