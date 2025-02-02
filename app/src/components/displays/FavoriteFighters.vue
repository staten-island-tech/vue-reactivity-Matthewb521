<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <FavoriteCard v-for="fighter in favFighters" :key="fighter.name" :fighter="fighter" />
  </div>
</template>

<script setup>
import { favFighters } from '@/arrays/favFighters.js'
import FavoriteCard from '../cards/FavoriteCard.vue'
</script>

<style lang="scss" scoped></style>
