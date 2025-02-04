<template>
  <div>
    <h1>Catch the Clown Game</h1>
    <div>
      <p>Score: {{ score }}</p>
      <p>Lives: {{ lives }}</p>
    </div>
    <!-- You can add other elements to display game data -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      score: 0,
      lives: 5,
    }
  },
  created() {
    this.getGameStatus()
    setInterval(this.getGameStatus, 1000) // Update every second
  },
  methods: {
    async getGameStatus() {
      try {
        const response = await axios.get('http://localhost:5000/game-status')
        this.score = response.data.score
        this.lives = response.data.lives
      } catch (error) {
        console.error('Error fetching game status:', error)
      }
    },
  },
}
</script>
