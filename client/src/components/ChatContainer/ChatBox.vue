<template>
  <div class="wrapper" v-if="conversation">
    <div class="conversation" ref="chatContainer">
      <ChatHeader :conversation="conversation" :toggleProfile="toggleProfile" />
      <div
        class="conversation-body hide-scrollBar "
        ref="chatBody"
        :style="[{ height: vH }]"
      >
        <Message
          v-for="message in conversation.messages"
          :message="message"
          :key="message.id"
        />
      </div>
      <MessageBox
        :scrollToBottom="scrollToBottom"
        :activeChat="conversation.id"
      />
    </div>
    <div ref="Profile" class="quickProfile" :style="{ height: vH }">
      <UserDetails :user="conversation.users[1]" />
    </div>
  </div>

  <div v-else class="default">
    <h3>Click a conversation to Start</h3>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ChatHeader from './ChatHeader.vue'
import MessageBox from './MessageForm.vue'
import Message from './Message.vue'

import { UserDetails } from '../shared'
import { TimelineLite } from 'gsap'

export default {
  props: { conversation: Object },
  data: () => ({
    showProfile: false,
    tl: new TimelineLite()
  }),

  computed: {
    ...mapState(['currentUser']),

    ...mapGetters(['vH', 'isMobile'])
  },
  components: {
    ChatHeader,
    MessageBox,
    Message,
    UserDetails
  },
  methods: {
    toggleProfile() {
      this.showProfile = !this.showProfile
    },
    scrollToBottom() {
      // const last = this.$refs.chatBody.querySelector('.message-container:last-of-type')
      // last.scrollIntoView(true)
      this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight
    }
  },
  updated() {
    this.scrollToBottom()
  },
  watch: {
    showProfile(tovalue) {
      if (tovalue === true) {
        this.tl
          .to(this.$refs.chatContainer, {
            width: '50%',
            duration: 0.4
          })
          .then(() => {
            this.tl.to(this.$refs.Profile, {
              display: 'block',
              opacity: '1',
              duration: 0.1
            })
          })
      } else {
        this.tl.reverse().then(() => {
          this.tl = new TimelineLite()
        })
      }
    }
  },
  mounted() {
    if (!this.$refs.chatBody) return
    this.scrollToBottom()
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  /* grid-template-columns: repeat(1, 1fr); */
  height: 100%;
  transition: all 2ms;
}
.conversation {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* transition: width 0.5s ease-in; */
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
  /* transition: all 0.5s ease-in; */
  padding: 12px;
  width: 100%;
  overflow: auto;
  padding-top: 100px;
  padding-bottom: 89px;
}

.quickProfile {
  height: 100%;
  width: 50%;
  opacity: 0;
  overflow: hidden;
  border-left: 1px solid #e5e9f2;
  display: none;
}
@media (min-width: 1200px) {
}
</style>
