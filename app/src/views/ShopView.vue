<template>
  <div class="mt-8 flex gap-8 px-6">
    <div class="flex-1">
      <TheProducts />
    </div>
    <div class="w-[20%] sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <ShoppingCart />
    </div>
  </div>
</template>

<script setup>
import TheProducts from '@/components/displays/TheProducts.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
</script>

<style scoped></style>
