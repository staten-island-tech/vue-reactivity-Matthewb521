<template>
  <div class="w-full sticky top-0 bg-white z-10">
    <NavBar />
  </div>
  <div>
    <WelcomeHeader>{{ currentTitle }}</WelcomeHeader>
  </div>
  <div>
    <iframe
      id="youtube-player"
      width="0"
      height="0"
      src="https://www.youtube.com/watch?v=TMy5gi5v784"
      frameborder="0"
      allow="autoplay"
    ></iframe>
  </div>
  <RouterView />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import WelcomeHeader from '@/components/TheHeader.vue'
import gsap from '@/plugins/gsap.js'

const route = useRoute()
const currentTitle = computed(() => route.meta.title || 'Default Title')
</script>

<style lang="scss" scoped></style>
