<template>
  <div>
    <h1
      class="rainbow-text text-4xl md:text-6xl font-extrabold text-white text-center uppercase tracking-wide bg-gradient-to-r from-red-600 to-gray-900 py-4"
    >
      <!-- use a slot in 1 Header component instead of 5 components -->
      Welcome to the game
    </h1>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes rainbow {
  0% {
    color: red;
  }
  16% {
    color: orange;
  }
  33% {
    color: yellow;
  }
  50% {
    color: green;
  }
  66% {
    color: blue;
  }
  83% {
    color: indigo;
  }
  100% {
    color: violet;
  }
}

.rainbow-text:hover {
  animation: rainbow 3s linear infinite;
}
</style>
