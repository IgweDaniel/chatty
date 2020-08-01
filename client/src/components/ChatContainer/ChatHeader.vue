<template>
  <div class="chat-header">
    <div class="page-back-button">
      <BackButton />
    </div>
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
    <div class="conversation-actions">
      <div>
        <button @click="toggleProfile">tProfile</button>
        <b-dropdown
          :size="isMobile ? 'sm' : 'lg'"
          variant="link"
          offset="-150px"
          toggle-class="text-decoration-none"
          no-caret
          :style="{ outline: 'none', border: 'none' }"
        >
          <template v-slot:button-content>
            <OptionIcon height="20px" width="20px" stroke="#495057" />
          </template>
          <b-dropdown-item>View Info</b-dropdown-item>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
          <b-dropdown-item href="#">Mute Notifications</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar, BackButton } from '@/components/shared'
import OptionIcon from '@/assets/svg/option.svg'
import { mapGetters } from 'vuex'

export default {
  props: {
    conversation: Object,
    toggleProfile: Function
  },
  computed: { ...mapGetters(['isMobile']) },
  components: {
    Avatar,
    OptionIcon,
    BackButton
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
.chat-image {
  margin-left: 15px;
}
.page-back-button {
  /* margin: 0 10px; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
}
@media (min-width: 1200px) {
  .page-back-button {
    display: none;
  }
  .chat-image {
    margin-left: 0px;
  }
}
</style>
