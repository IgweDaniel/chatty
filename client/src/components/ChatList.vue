<template>
  <div class="chat-list">
    <Header />
    <div class="chats">
      <template v-for="chat in chats">
        <ListItem
          :setActiveList="setActiveChat"
          :activeId="activeChat"
          :listImg="chat.chatImg"
          :listTitle="chat.name"
          :id="chat.id"
          page="Chat"
          :key="chat.id"
        >
          <template v-slot:tag v-if="chat.messages.length > 0">
            {{ chat.messages[chat.messages.length - 1].time | fromNow }}
          </template>
          <template v-slot:body v-if="chat.messages.length > 0">
            <span
              class="user"
              v-if="
                currentUser.name !==
                  chat.messages[chat.messages.length - 1].sender.name
              "
            >
              {{ chat.messages[chat.messages.length - 1].sender.name }}:
            </span>

            {{ chat.messages[chat.messages.length - 1].message }}
          </template>
        </ListItem>
      </template>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { ListItem } from './shared'
import moment from 'moment'
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    chats: Array
  },
  data: () => ({}),
  components: {
    Header,
    ListItem
  },
  computed: {
    ...mapState(['currentUser', 'activeChat', 'winWidth'])
  },
  methods: {
    ...mapActions(['setActiveChat'])
  },
  filters: {
    fromNow: function(value) {
      var a = moment(new Date(value))
      var b = moment(new Date())
      a.from(b)
      return a.from(b)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.chat-list {
  height: 100%;
  /* background-color: #f8f9fa; */
}
.chats {
  padding: 12px;
}
</style>
