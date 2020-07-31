<template>
  <div class="conversation" v-if="conversation">
    <ConversationHeader :conversation="conversation" />
    <div class="conversation-body" ref="chatBody" :style="{height:vH}">
      <Message
        v-for="message in conversation.messages"
        :message="message"
        :key="message.id"
      />
    </div>
    <MessageBox :scrollToBottom="scrollToBottom" :activeChat="conversation.id" />
  </div>
  <div v-else class="default">
    <h3>Click a conversation to Start</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ConversationHeader from './ConversationHeader.vue'
import MessageBox from './MessageForm.vue'
import Message from './Message.vue'

export default {
  props: { conversation: Object },
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser']),

    ...mapGetters(['vH'])
  },
  components: {
    ConversationHeader,
    MessageBox,
    Message
  },
  methods: {
    scrollToBottom () {
      // const last = this.$refs.chatBody.querySelector('.message-container:last-of-type')
      // last.scrollIntoView(true)
      this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight
    }
  },
  updated () {
    this.scrollToBottom()
  },
  mounted () {
    if (!this.$refs.chatBody) return
    this.scrollToBottom()
  }
}
</script>

<style scoped>
.conversation {
  position: relative;
  height: 100%;

  overflow: hidden;
}
.default {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.conversation-body {
height: 100%;
  padding: 12px;
  width: 100%;
  overflow: scroll;
  padding-top: 100px;
  padding-bottom: 89px;
}
@media (min-width: 1200px) {

}
</style>
