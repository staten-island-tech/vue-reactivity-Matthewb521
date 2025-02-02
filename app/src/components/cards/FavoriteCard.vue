<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
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
          @click="openModal"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 hover:scale-110 transition-transform"
        >
          Read More
        </button>
      </div>
    </div>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen"
  >
    <div class="relative w-full max-w-md max-h-full bg-white rounded-lg shadow-sm dark:bg-gray-700">
      <!-- Modal Header -->
      <div
        class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600 border-gray-200"
      >
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          {{ fighter.name }}
        </h3>
        <button
          @click="closeModal"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-4 space-y-4">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          {{ fighter.description }}
        </p>
      </div>

      <!-- Modal Footer -->
      <div class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          @click="closeModal"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { favFighters } from '@/arrays/favFighters.js'
import { ref } from 'vue'

defineProps({
  fighter: Object,
})

function submit(fighter) {
  const index = favFighters.findIndex((f) => f.name === fighter.name)
  if (index !== -1) {
    favFighters.splice(index, 1)
  }
}

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style lang="scss" scoped></style>
