<template>
  <div>
    <TheFavHeader />
  </div>
  <br />
  <br />
  <div class="flex gap-3">
    <div class="w-[2%]"></div>
    <FavoriteFighters />
    <StatsBox class="w-[20%] sticky top-[80px]" />
  </div>
</template>

<script setup>
import TheFavHeader from '@/components/headers/TheFavHeader.vue'
import FavoriteFighters from '@/components/displays/FavoriteFighters.vue'
import StatsBox from '@/components/StatsBox.vue'
</script>

<style lang="scss" scoped></style>
