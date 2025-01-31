<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="https://pngimg.com/uploads/ufc/ufc_PNG15.png" alt="Logo" />
        </div>
        <div class="flex space-x-4">
          <router-link
            to="/"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >Favorites</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
