<template>
<div class="chatt">
    <ChatContainer/>
</div>
</template>

<script>
import ChatContainer from '@/components/ChatContainer'
export default {
  components: {
    ChatContainer
  }
}
</script>

<style scoped>
.chatt{
          /* height:100vh; */
        /* height: -webkit-fill-available; */
        /* height: calc(var(--vh, 1vh) * 100); */
    height: 100%;
    width: 100%;
}
</style>
