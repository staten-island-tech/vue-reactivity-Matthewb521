<template>
  <div>
    <audio ref="backgroundMusic" loop>
      <source src="/background.mp3" type="audio/mp3" />
    </audio>

    <button
      @click="toggleMusic"
      class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
    >
      {{ isPlaying ? 'Pause Music' : 'Play Music' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const backgroundMusic = ref(null)
const isPlaying = ref(false)

const toggleMusic = () => {
  if (backgroundMusic.value) {
    if (isPlaying.value) {
      backgroundMusic.value.pause()
    } else {
      backgroundMusic.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}
</script>

<style scoped></style>
