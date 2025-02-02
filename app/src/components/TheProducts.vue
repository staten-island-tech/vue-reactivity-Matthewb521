<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ShopCard v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<script setup>
import ShopCard from './ShopCard.vue'
import { products } from '@/products.js'
</script>

<style lang="scss" scoped></style>
