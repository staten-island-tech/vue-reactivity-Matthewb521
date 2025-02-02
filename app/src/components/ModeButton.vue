<template>
  <div :class="theme">
    <button @click="toggleTheme">Toggle Dark/Light Mode</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.body.classList.toggle('dark', theme.value === 'dark')
}
</script>

<style>
.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #2d2d2d;
  color: #ffffff;
}

* {
  transition:
    background-color 0.3s,
    color 0.3s;
}
</style>
