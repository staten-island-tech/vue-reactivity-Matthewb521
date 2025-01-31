<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <img class="rounded-t-lg" :src="fighter.image" :alt="fighter.name" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ fighter.name }} "{{ fighter.nickname }}"
      </h5>
      <p class="mb-1 text-gray-700 dark:text-gray-400">Rank: #{{ fighter.rank }} Pound-for-Pound</p>
      <p class="mb-1 text-gray-700 dark:text-gray-400">Wins: {{ fighter.wins }} | Losses: {{ fighter.losses }}</p>
      <p class="mb-1 text-gray-700 dark:text-gray-400">Division: {{ fighter.division }}</p>
      <p class="mb-3 text-gray-700 dark:text-gray-400">Country: {{ fighter.country }}</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add To Favorites
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  fighter: Object,
})
</script>

<style lang="scss" scoped></style>
