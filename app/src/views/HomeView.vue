<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <TheCard v-for="fighter in fighters" :key="fighter.name" :fighter="fighter" />
  </div>
</template>

<script setup>
import TheCard from '@/components/TheCard.vue'
// import { fighters } from '../array.js'; 

</script>

<style lang="scss" scoped></style>
