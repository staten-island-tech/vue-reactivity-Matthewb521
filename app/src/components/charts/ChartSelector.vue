<template>
  <div class="flex justify-center items-center">
    <select
      v-model="selectedComponent"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <option value="chart">Show Doughnut Chart</option>
      <option value="BarChart">Show Bar Chart</option>
    </select>

    <DoughnutChart v-if="selectedComponent === 'chart'" />
    <BarChart v-if="selectedComponent === 'BarChart'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import BarChart from '@/components/charts/BarChart.vue'

const selectedComponent = ref('chart')
</script>

<style scoped></style>
