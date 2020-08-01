<template>
  <div class="back-button" @click="goBack">
    <ArrowPrev />
  </div>
</template>

<script>
import ArrowPrev from '@/assets/svg/arrowPrev.svg'
export default {
  components: {
    ArrowPrev
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back-button {
  cursor: pointer;
}
.back-button svg {
  height: 20px;
  width: 20px;
  fill: #000;
}

@media (min-width: 1200px) {
  .back-button {
    display: none;
  }
}
</style>
