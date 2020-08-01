<template>
  <div class="message-box">
    <div class="actions">
      <div class="upload-button clickable">
        <AddIcon />
      </div>
      <div class="emoji-button clickable">
        <EmojiIcon />
      </div>
    </div>
    <div class="message-input">
      <textarea
        ref="inp"
        v-model="messageText"
        @focus="scroll"
        @keyup.prevent.enter="sendMessage"
        name
        id
        rows="1"
        placeholder="Type a message"
      ></textarea>
    </div>
    <div class="pri-action">
      <button class="submit-button" @click.prevent="sendMessage">
        <div class="icon">
          <NextIcon />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import AddIcon from '@/assets/svg/add.svg'
import EmojiIcon from '@/assets/svg/emoji.svg'
import NextIcon from '@/assets/svg/arrowNext.svg'
import { mapActions, mapState } from 'vuex'
// import { chats } from '@/data.js'
export default {
  name: 'MessageBox',
  props: {
    scrollToBottom: Function,
    activeChat: Number
  },
  data: () => ({ messageText: '' }),
  components: {
    NextIcon,
    EmojiIcon,
    AddIcon
  },
  computed: { ...mapState(['currentUser']) },

  methods: {
    ...mapActions(['createMessage']),
    scroll() {
      this.scrollToBottom()
    },
    sendMessage() {
      if (this.messageText.trim() === '') return
      const date = new Date()
      this.createMessage({
        message: this.messageText,
        time: date.getTime(),
        sender: this.currentUser
      })
      this.messageText = ' '
      this.$refs.inp.focus()
    }
  }
}
</script>

<style scoped>
.message-box {
  height: 79px;
  border-top: 1px solid #e5e9f2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: start;
  background: #fff;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  align-content: center;
  align-items: center;
  padding: 0 12px;
}
.actions svg {
  width: 24px;
  height: 24px;
  stroke: #21252959;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.actions .clickable {
  display: flex;
  align-items: center;
  justify-content: center;
}
.message-input {
  height: 100%;
  display: flex;
  align-items: center;
}
.message-input textarea {
  outline: none;
  border: none;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  resize: none;
  padding: 6px 20px;
  font-weight: 500;
  font-family: Inter;
  font-size: 15px;
}
textarea::placeholder {
  font-weight: 500;
  font-family: Inter;
  font-size: 15px;
}
.submit-button {
  cursor: pointer;
  background-color: var(--theme-color);
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.submit-button:hover {
  background: #665dfeeb;
}
.submit-button:active {
  background: rgb(93 86 218);
}
.pri-action {
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-button .icon {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit-button svg {
  width: 24px;
  height: 24px;
  stroke: #fff;
}
</style>
