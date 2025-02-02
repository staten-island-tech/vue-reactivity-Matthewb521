<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-110 transition-transform"
  >
    <img class="rounded-t-lg" :src="fighter.image" :alt="fighter.name" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ fighter.name }} "{{ fighter.nickname }}"
      </h5>
      <p class="mb-1 text-gray-700 dark:text-gray-400">Rank: #{{ fighter.rank }} Pound-for-Pound</p>
      <p class="mb-1 text-gray-700 dark:text-gray-400">
        Wins: {{ fighter.wins }} | Losses: {{ fighter.losses }}
      </p>
      <p class="mb-1 text-gray-700 dark:text-gray-400">Division: {{ fighter.division }}</p>
      <p class="mb-3 text-gray-700 dark:text-gray-400">Country: {{ fighter.country }}</p>
      <div class="flex gap-3">
        <form name="sumbit-form" @submit.prevent="submit(fighter)">
          <button
            type="submit"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:scale-110 transition-transform"
          >
            Remove From Favorite
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </form>

        <button
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 hover:scale-110 transition-transform"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { favFighters } from '@/favFighters.js'
import { reactive } from 'vue'

defineProps({
  fighter: Object,
})

const favFighter = reactive({
  name: '',
  nickname: '',
  rank: '',
  wins: '',
  losses: '',
  division: '',
  isChampion: '',
  country: '',
  description: '',
  image: '',
})

function submit(fighter) {
  const index = favFighters.findIndex((f) => f.name === fighter.name)
  if (index !== -1) {
    favFighters.splice(index, 1)
  }
}
</script>

<style lang="scss" scoped></style>
