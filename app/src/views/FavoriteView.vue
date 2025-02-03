<template>
  <div></div>
  <br />
  <br />
  <div class="flex gap-3">
    <div class="w-[2%]"></div>
    <FavoriteFighters />
    <StatsBox class="w-[20%] sticky top-[80px]" />
  </div>
</template>

<script setup>
import FavoriteFighters from '@/components/displays/FavoriteFighters.vue'
import StatsBox from '@/components/StatsBox.vue'
</script>

<style lang="scss" scoped></style>
