<template>
  <div class="game-container text-2xl">
    <h1 class="text-black">Catch the Clown</h1>
    <p class="text-black">
      Score: <span>{{ score }}</span> | Lives: <span>{{ lives }}</span>
    </p>
    <br />
    <canvas ref="canvas" width="945" height="600"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const canvas = ref(null)
    let ctx = null

    const score = ref(0)
    const lives = ref(5)
    const clownVelocity = ref(5)
    const clownAcceleration = 0.5
    let gameRunning = true // ✅ Prevents the game from running after loss

    const clown = ref({
      x: Math.random() * (945 - 80),
      y: Math.random() * (600 - 80),
      width: 80,
      height: 80,
      dx: (Math.random() > 0.5 ? 1 : -1) * 5,
      dy: (Math.random() > 0.5 ? 1 : -1) * 5,
    })

    let gameInterval = null
    let bgMusic = new Audio('/ctc_background_music.wav')
    let clickSound = new Audio('/click_sound.wav')
    let missSound = new Audio('/miss_sound.wav')

    bgMusic.loop = true

    const clownImg = new Image()
    clownImg.src = '../Images/clown.png'

    const bgImg = new Image()
    bgImg.src = '../Images/background.png'

    const updateGame = () => {
      if (!gameRunning || !ctx) return // ✅ Stops updates after game over

      clown.value.x += clown.value.dx
      clown.value.y += clown.value.dy

      if (clown.value.x <= 0 || clown.value.x + clown.value.width >= 945) clown.value.dx *= -1
      if (clown.value.y <= 0 || clown.value.y + clown.value.height >= 600) clown.value.dy *= -1

      drawGame()
    }

    const drawGame = () => {
      ctx.clearRect(0, 0, 945, 600)
      ctx.drawImage(bgImg, 0, 0, 945, 600)
      ctx.drawImage(clownImg, clown.value.x, clown.value.y, clown.value.width, clown.value.height)
    }

    const handleClick = (event) => {
      if (!gameRunning) return // ✅ Prevents clicks after game over

      const rect = canvas.value.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      if (
        mouseX >= clown.value.x &&
        mouseX <= clown.value.x + clown.value.width &&
        mouseY >= clown.value.y &&
        mouseY <= clown.value.y + clown.value.height
      ) {
        clickSound.play()
        score.value++
        clownVelocity.value += clownAcceleration
        clown.value.dx = (Math.random() > 0.5 ? 1 : -1) * clownVelocity.value
        clown.value.dy = (Math.random() > 0.5 ? 1 : -1) * clownVelocity.value
        clown.value.x = Math.random() * (945 - clown.value.width)
        clown.value.y = Math.random() * (600 - clown.value.height)
      } else {
        missSound.play()
        lives.value--
        if (lives.value <= 0) gameOver()
      }
    }

    const gameOver = () => {
      gameRunning = false // ✅ Stops the game loop
      bgMusic.pause()
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(0, 0, 945, 600)
      ctx.fillStyle = 'yellow'
      ctx.font = '48px Arial'
      ctx.fillText('Game Over', 945 / 2 - 120, 600 / 2)
      ctx.fillText(`Final Score: ${score.value}`, 945 / 2 - 140, 600 / 2 + 50)
      ctx.fillText('Click to Restart', 945 / 2 - 160, 600 / 2 + 100)

      canvas.value.addEventListener('click', resetGame, { once: true }) // ✅ Waits for user click
    }

    const resetGame = () => {
      gameRunning = true // ✅ Reactivates game updates
      lives.value = 5
      score.value = 0
      clownVelocity.value = 5
      clown.value.x = Math.random() * (945 - clown.value.width)
      clown.value.y = Math.random() * (600 - clown.value.height)
      clown.value.dx = (Math.random() > 0.5 ? 1 : -1) * clownVelocity.value
      clown.value.dy = (Math.random() > 0.5 ? 1 : -1) * clownVelocity.value
      bgMusic.play()
    }

    onMounted(() => {
      if (canvas.value) {
        ctx = canvas.value.getContext('2d')
        canvas.value.addEventListener('click', handleClick)
        bgMusic.play()
        gameInterval = setInterval(updateGame, 1000 / 60)
      }
    })

    onUnmounted(() => {
      if (canvas.value) {
        canvas.value.removeEventListener('click', handleClick)
      }
      clearInterval(gameInterval)
      bgMusic.pause()
    })

    return {
      canvas,
      score,
      lives,
    }
  },
}
</script>

<style scoped>
.game-container {
  text-align: center;
  color: white;
  padding: 20px;
}
canvas {
  display: block;
  margin: auto;
  border: 2px solid red;
  cursor: pointer;
}
</style>
