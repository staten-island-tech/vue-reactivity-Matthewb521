<template>
  <div
    class="inline-block bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 text-center max-h-[150px] overflow-auto"
  >
    <h1 class="text-xl font-bold text-gray-900 dark:text-white">
      Combined Wins: <span class="text-blue-600">{{ totalWins }}</span>
    </h1>
    <h1 class="text-xl font-bold text-gray-900 dark:text-white mt-2">
      Combined Losses: <span class="text-red-600">{{ totalLosses }}</span>
    </h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { favFighters } from '@/favFighters.js'

const favFightersRef = ref(favFighters)

const totalWins = computed(() =>
  favFightersRef.value.reduce((acc, fighter) => acc + fighter.wins, 0),
)
const totalLosses = computed(() =>
  favFightersRef.value.reduce((acc, fighter) => acc + fighter.losses, 0),
)
</script>

<style scoped></style>
