<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="https://pngimg.com/uploads/ufc/ufc_PNG15.png" alt="Logo" />
        </div>
        <div class="flex space-x-4">
          <ModeButton class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" />
          <TheMusic />
          <RouterLink to="/" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Home</RouterLink
          >
          <RouterLink
            to="/favorite"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Favorites</RouterLink
          >
          <RouterLink
            to="/shop"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Shop</RouterLink
          >
          <RouterLink
            to="/game"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Game</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ModeButton from './ModeButton.vue'
import TheMusic from './TheMusic.vue'
</script>

<style lang="scss" scoped></style>
