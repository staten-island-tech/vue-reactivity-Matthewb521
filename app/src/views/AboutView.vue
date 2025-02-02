<template>
  <div>
    <TheFavHeader />
  </div>
  <br />
  <br />
  <div class="flex gap-3">
    <FavoriteFighters />
    <StatsBox />
  </div>
</template>

<script setup>
import TheFavHeader from '@/components/TheFavHeader.vue'
import FavoriteFighters from '@/components/FavoriteFighters.vue'
import StatsBox from '@/components/StatsBox.vue'
</script>

<style lang="scss" scoped></style>
