<template>
  <div>
    <ShopHeader />
  </div>
  <br />
  <br />
  <div class="flex">
    <div class="w-[2%]"></div>
    <div class="w-[70%]">
      <TheProducts />
    </div>
    <div class="w-[10%]"></div>
    <div class="w-[20%] sticky top-[80px] max-h-[calc(100vh-80px)] overflow-y-auto">
      <ShoppingCart />
    </div>
  </div>
</template>

<script setup>
import ShopHeader from '@/components/headers/ShopHeader.vue'
import TheProducts from '@/components/displays/TheProducts.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
</script>

<style lang="scss" scoped></style>
