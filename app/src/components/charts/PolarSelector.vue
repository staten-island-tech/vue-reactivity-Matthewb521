<template>
  <select
    v-model="selectedFighter"
    @change="updateChart"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-10 left-100"
  >
    <option v-for="fighter in fighters" :key="fighter.name" :value="fighter.name">
      {{ fighter.name }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue'
import { fighters } from '@/arrays/fighters'

const selectedFighter = ref(fighters[0].name)

const updateChart = () => {
  console.log('Selected Fighter:', selectedFighter.value)
}
</script>

<style scoped></style>
