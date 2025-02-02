<template>
  <div><TheCard v-for="fighter in favFighters" :key="fighter.name" :fighter="fighter" /></div>
</template>

<script setup>
import { favFighters } from '@/favFighters.js'

console.log(favFighters)
</script>

<style lang="scss" scoped></style>
