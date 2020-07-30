<template>
  <div class="conversation" v-if="conversation">
    <ConversationHeader :conversation="conversation"/>
<div class="conversation-body" ref="chatBody">
<Message v-for="(message,index) in conversation.messages" :message="message" :key="message.id" :prev="conversation.messages[index-1]"/>
</div>
      <MessageBox/>
  </div>
  <div v-else class="default">  <h3 > You need to click a chat </h3></div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ConversationHeader from './ConversationHeader.vue'
import MessageBox from './MessageForm.vue'
import Message from './Message.vue'

export default {
  data: () => ({
    ...mapState([
      'currentUser'
    ])
  }),
  computed: {
    ...mapGetters(['conversation'])
  },
  components: {
    ConversationHeader, MessageBox, Message
  },
  updated () {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight
  },
  mounted () {
    if (!this.$refs.chatBody) return
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight
  }

}
</script>

<style scoped>
.conversation{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.default{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.conversation-body{
  height:100vh;
  height: -webkit-fill-available;
  height: calc(var(--vh, 1vh) * 100);
  padding: 12px;
  width: 100%;
  overflow: scroll;
    padding-top: 100px;
  padding-bottom: 89px;

}
</style>
