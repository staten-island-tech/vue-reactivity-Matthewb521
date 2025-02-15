<template>
  <div class="flex flex-col items-center">
    <PolarSelector v-model="selectedFighter" @change="updateChart" />
    <div class="w-225 h-225">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { fighters } from '@/arrays/fighters'
import PolarSelector from '@/components/charts/PolarSelector.vue'

const chartCanvas = ref(null)
const selectedFighter = ref(fighters[0].name)
let chartInstance = null

const getFighterStats = (fighterName) => {
  const fighter = fighters.find((f) => f.name === fighterName)
  return fighter
    ? {
        name: fighter.name,
        strength: fighter.strength || 0,
        speed: fighter.speed || 0,
        striking: fighter.striking || 0,
        grappling: fighter.grappling || 0,
      }
    : null
}

const createChart = () => {
  const fighterStats = getFighterStats(selectedFighter.value)
  if (!fighterStats || !chartCanvas.value) return

  chartInstance = new Chart(chartCanvas.value, {
    type: 'polarArea',
    data: {
      labels: ['Strength', 'Speed', 'Striking', 'Grappling'],
      datasets: [
        {
          label: fighterStats.name,
          data: [
            fighterStats.strength,
            fighterStats.speed,
            fighterStats.striking,
            fighterStats.grappling,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
          hoverOffset: 6,
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
          text: `${fighterStats.name}'s Stats`,
          color: '#000000',
          font: {
            size: 20,
            family: 'Protest Guerrilla',
          },
        },
      },
      scales: {
        r: {
          pointLabels: {
            display: true,
            font: {
              size: 14,
              weight: 'bold',
            },
            color: '#000000',
            centerPointLabels: true,
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.2)',
          },
          ticks: {
            display: false,
          },
        },
      },
      animation: {
        duration: 1000,
        easing: 'easeInOutQuart',
      },
    },
  })
}

const updateChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }
  createChart()
}

watch(selectedFighter, updateChart)

onMounted(createChart)
</script>

<style scoped></style>
