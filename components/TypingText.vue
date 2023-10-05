<template>
  <div class="typing-text">
    <p>{{ typedText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typedText: '',
      textToType: 'Mau Membagikan Resep Favoritmu ?',
      typingSpeed: 50,
      currentIndex: 0,
    }
  },
  created() {
    this.startTyping()
  },
  methods: {
    async startTyping() {
      while (true) {
        await this.typeText()
        await this.sleep(2000)
        this.typedText = ''
      }
    },
    async typeText() {
      const textLength = this.textToType.length

      for (let i = 0; i < textLength; i++) {
        this.typedText += this.textToType.charAt(i)
        await this.sleep(this.typingSpeed)
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
}
</script>

<style scoped>
.typing-text {
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  font-size: 25px;
  width: 400px;
}
</style>
