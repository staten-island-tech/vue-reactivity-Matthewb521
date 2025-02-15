<template>
  <div class="flex justify-center items-center">
    <div class="w-225 h-225">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { fighters } from '@/arrays/fighters'

const chartCanvas = ref(null)

const processFighterData = () => {
  const divisionCounts = {}
  fighters.forEach((fighter) => {
    divisionCounts[fighter.division] = (divisionCounts[fighter.division] || 0) + 1
  })
  return {
    labels: Object.keys(divisionCounts),
    data: Object.values(divisionCounts),
  }
}

onMounted(() => {
  if (chartCanvas.value) {
    const { labels, data } = processFighterData()

    new Chart(chartCanvas.value, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            label: 'Fighters per Division',
            data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C9CBCF',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: '#000000',
              font: {
                size: 16,
                family: 'Protest Guerrilla',
              },
            },
          },
          title: {
            display: true,
            text: 'Fighters Per Division',
            color: '#000000',
            font: {
              size: 20,
              family: 'Protest Guerrilla',
            },
          },
        },
      },
    })
  }
})
</script>

<style scoped></style>
