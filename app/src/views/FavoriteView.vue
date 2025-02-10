<template>
  <div class="mt-8 flex gap-8 px-6">
    <div class="flex-1">
      <FavoriteFighters />
    </div>
    <div class="w-[20%] sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <StatsBox />
    </div>
  </div>
</template>

<script setup>
import FavoriteFighters from '@/components/displays/FavoriteFighters.vue'
import StatsBox from '@/components/StatsBox.vue'
</script>

<style scoped></style>
