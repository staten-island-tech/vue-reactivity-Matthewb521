<template>
  <div>
    <canvas ref="gameCanvas" width="945" height="600"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
    }
  },
  mounted() {
    this.setupWebSocket()
  },
  methods: {
    setupWebSocket() {
      this.ws = new WebSocket('ws://localhost:8765')

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        const base64Image = data.image
        this.displayGameFrame(base64Image)
      }

      this.ws.onerror = (error) => {
        console.error('WebSocket Error: ', error)
      }
    },

    displayGameFrame(base64Image) {
      const canvas = this.$refs.gameCanvas
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
      }
      img.src = 'data:image/png;base64,' + base64Image
    },
  },
}
</script>
