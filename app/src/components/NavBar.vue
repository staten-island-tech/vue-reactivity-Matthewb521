<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="https://pngimg.com/uploads/ufc/ufc_PNG15.png" alt="Logo" />
        </div>
        <div class="flex space-x-4">
          <mode-button class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" />
          <router-link
            to="/"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Home</router-link
          >
          <router-link
            to="/favorite"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Favorites</router-link
          >
          <router-link
            to="/shop"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Shop</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ModeButton from './ModeButton.vue'
</script>

<style lang="scss" scoped></style>
