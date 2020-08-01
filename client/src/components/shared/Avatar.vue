<template>
  <div :style="{ height: size, width: size }" class="avatar">
    <img :src="url" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: String,
    size: {
      type: String,
      default: '40px'
    }
  }
}
</script>

<style>
.avatar {
  border-radius: 50%;
  overflow: hidden;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
