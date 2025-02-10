<template>
  <div>
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-4"
      v-for="(item, index) in cart"
      :key="index"
    >
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {{ item.name }}
        </h5>
        <div class="flex s-center mt-2.5 mb-5">
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
            >Rating: {{ item.rating }}</span
          >
        </div>
        <div @click="playSound" class="flex justify-between">
          <button
            @click="removeOne(index)"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
  <audio ref="soundEffect" src="/sounds/remove.mp3" preload="auto"></audio>
</template>

<script setup>
import { ref } from 'vue'
import { cart } from '@/arrays/cart.js'

defineProps({
  product: Object,
})

function removeOne(index) {
  cart.splice(index, 1)
}

const soundEffect = ref(null)

const playSound = () => {
  if (soundEffect.value) {
    soundEffect.value.currentTime = 0
    soundEffect.value.play()
  }
}
</script>

<style scoped></style>
