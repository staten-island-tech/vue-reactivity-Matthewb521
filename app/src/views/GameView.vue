<template>
  <div>
    <h1>Catch the Clown Game</h1>
    <img :src="gameImage" alt="Game Frame" />
    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      gameImage: '', // The image URL or other data that the backend serves
    }
  },
  methods: {
    // Fetch game frame from Flask backend
    fetchGameFrame() {
      axios
        .get('http://localhost:5000/game')
        .then((response) => {
          this.gameImage = response.data // Set the image URL or game data from Flask
        })
        .catch((error) => {
          console.error('Error fetching game frame:', error)
        })
    },

    // Start the game (could trigger some game state change in Flask)
    startGame() {
      axios
        .post('http://localhost:5000/start-game')
        .then((response) => {
          console.log('Game started:', response.data)
        })
        .catch((error) => {
          console.error('Error starting the game:', error)
        })
    },
  },
  created() {
    this.fetchGameFrame() // Fetch game data when the component is created
  },
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
