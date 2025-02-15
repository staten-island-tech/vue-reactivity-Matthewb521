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
  const wins = fighters.map((fighter) => fighter.wins)
  const losses = fighters.map((fighter) => fighter.losses)

  return {
    labels: ['Wins', 'Losses'],
    data: [
      wins.reduce((acc, current) => acc + current, 0),
      losses.reduce((acc, current) => acc + current, 0),
    ],
  }
}

onMounted(() => {
  if (chartCanvas.value) {
    const { labels, data } = processFighterData()

    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Fighter Wins and Losses',
            data: data,
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
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
            text: 'Total Fighter Wins and Losses',
            color: '#000000',
            font: {
              size: 20,
              family: 'Protest Guerrilla',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#000000',
            },
          },
          y: {
            ticks: {
              color: '#000000',
              beginAtZero: true,
            },
          },
        },
      },
    })
  }
})
</script>

<style scoped></style>
