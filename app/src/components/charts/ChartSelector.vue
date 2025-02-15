<template>
  <div class="flex justify-center items-center h-screen relative">
    <select
      v-model="selectedComponent"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute top-10 left-5"
    >
      <option value="chart">Show Doughnut Chart</option>
      <option value="BarChart">Show Bar Chart</option>
      <option value="ScatterChart">Show Scatter Chart</option>
    </select>

    <div class="flex justify-center items-center">
      <DoughnutChart v-if="selectedComponent === 'chart'" />
      <BarChart v-if="selectedComponent === 'BarChart'" />
      <ScatterChart v-if="selectedComponent === 'ScatterChart'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import ScatterChart from './ScatterChart.vue'

const selectedComponent = ref('chart')
</script>

<style scoped></style>
