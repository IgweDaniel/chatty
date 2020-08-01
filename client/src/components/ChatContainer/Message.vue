<template>
  <div class="message-container" :class="messageClass">
    <div class="message">
      <p class="text">
        {{ message.message }}
      </p>
    </div>
    <div class="message-time">
      {{ time }}
    </div>
    <div class="sender-image">
      <Avatar :url="message.sender.avatar" size="35px" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Avatar } from '@/components/shared'
import moment from 'moment'
export default {
  props: {
    message: Object
  },
  components: {
    Avatar
  },
  mounted() {},
  computed: {
    ...mapState(['currentUser']),
    time() {
      return moment(new Date(this.message.time)).format('h:hh a')
    },
    see() {
      return moment(new Date(this.message.time)).format('D MMM')
    },

    messageClass() {
      return this.message.sender.name === this.currentUser.name
        ? 'self'
        : 'sender'
    }
  }
}
</script>

<style scoped>
.message-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.message-container.self {
  justify-content: flex-end;
}
.message {
  /* width: 80%; */
  max-width: 250px;
  padding: 16px 36px;
}
.message-container.sender .message {
  background-color: #f5f6fa;
  color: #8094ae;
  margin-left: 20px;
}
.message-container.self .message {
  background-color: var(--theme-color);
  color: #fff;
  margin-right: 20px;
}
.message .text {
  text-align: start;
  margin: 0;
}
.sender-image {
  position: absolute;
  background: #fff;
  height: 45px;
  width: 45px;
  bottom: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.message-time {
  position: absolute;
  bottom: -20px;
  color: #adb5bd;

  font-size: 12px;
}
.message-container.sender .message-time {
  left: 50px;
}
.message-container.self .message-time {
  right: 50px;
}
@media (min-width: 1200px) {
  .message {
    max-width: 370px;
    padding: 16px 36px;
  }
}
</style>
