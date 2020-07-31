<template>
  <div class="chat-header">
    <div class="conversation-details">
      <div class="chat-image">
        <Avatar :url="conversation.chatImg" />
      </div>
      <div class="chat-meta">
        <div class="name">
          {{ conversation.name }}
        </div>
        <span class="status" v-if="conversation.type == 'USER'">Online</span>
        <span class="users-count" v-else
          >{{ conversation.users.length }} members</span
        >
      </div>
    </div>
    <div class="conversation-actions"></div>
  </div>
</template>

<script>
import { Avatar } from '@/components/shared'
export default {
  props: {
    conversation: Object
  },
  components: {
    Avatar
  }
}
</script>

<style scoped>
.chat-header {
  z-index: 20;
  border-bottom: 1px solid #e5e9f2;
  padding: 12px 36px;

  height: 73px;
  position: absolute;
  text-align: start;
  top: 0;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
}
.conversation-actions {
  margin-left: auto;
}
.conversation-details {
  display: flex;
  align-items: center;
}
.chat-meta {
  /* margin: 0 20px ; */
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.chat-meta .name {
  font-size: 15px;
  font-weight: 500;
  margin: 4px 0;
}
.chat-meta .users-count,
.chat-meta .status {
  font-size: 13px;
  font-weight: 500;
}
</style>
