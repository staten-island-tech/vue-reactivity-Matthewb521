<template>
  <div
    class="w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-5 dark:bg-gray-800 dark:border-gray-700"
  >
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Shopping Cart</h1>
    <br />

    <CartCard />
    <br />

    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
      Total Price:${{ totalPrice }}
    </h2>
    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
      Total Rating:{{ totalRating }}
    </h2>
    <br />
    <router-link
      to="/video"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Checkout
    </router-link>
  </div>
</template>

<script setup>
import { cart } from '@/cart.js'
import CartCard from './CartCard.vue'
import { ref } from 'vue'
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const cartRef = ref(cart)

const totalPrice = computed(() => cartRef.value.reduce((acc, product) => acc + product.price, 0))
const totalRating = computed(() => cartRef.value.reduce((acc, product) => acc + product.rating, 0))
</script>

<style lang="scss" scoped></style>
