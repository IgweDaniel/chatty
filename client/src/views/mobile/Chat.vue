<template>
<div class="chatt page">
    <ChatContainer :conversation="conversation"/>
</div>
</template>

<script>
import ChatContainer from '@/components/ChatContainer'
import { mapState } from 'vuex'
export default {
  components: {
    ChatContainer
  },
  computed: {
    ...mapState(['chats']),
    conversation () {
      return this.chats.find(chat => `${chat.id}` === `${this.$route.params.id}`)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
