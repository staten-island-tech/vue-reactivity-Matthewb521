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
import { products } from '@/arrays/products'

const chartCanvas = ref(null)

const processProductData = () => {
  return products.map((product) => ({
    x: product.price,
    y: product.rating,
  }))
}

onMounted(() => {
  if (chartCanvas.value) {
    const dataPoints = processProductData()

    new Chart(chartCanvas.value, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Price vs. Rating',
            data: dataPoints,
            backgroundColor: '#36A2EB',
            borderColor: '#000000',
            borderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Price ($)',
              color: '#000000',
              font: { size: 16, family: 'Protest Guerrilla' },
            },
            ticks: { color: '#000000' },
          },
          y: {
            title: {
              display: true,
              text: 'Rating',
              color: '#000000',
              font: { size: 16, family: 'Protest Guerrilla' },
            },
            ticks: { color: '#000000' },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#000000',
              font: { size: 16, family: 'Protest Guerrilla' },
            },
          },
          title: {
            display: true,
            text: 'Product Price vs. Rating',
            color: '#000000',
            font: { size: 20, family: 'Protest Guerrilla' },
          },
        },
      },
    })
  }
})
</script>

<style scoped></style>
