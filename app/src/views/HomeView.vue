<template>
  <div>
    <TheWelcome />
  </div>
  <br />
  <br />
  <div class="flex">
    <div class="w-[2%]"></div>
    <div class="w-[96%]">
      <TheFighters />
    </div>
    <div class="w-[2%]"></div>
  </div>
</template>

<script setup>
import TheFighters from '@/components/displays/TheFighters.vue'
import TheWelcome from '@/components/headers/WelcomeHeader.vue'
</script>

<style lang="scss" scoped></style>
