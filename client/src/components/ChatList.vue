<template>
  <div class="chat-list">
    <Header/>

       <!-- <router-link to="/chat" active-class="link-active" class="link">
       click me</router-link> -->
   <div class="chats" >
     <template v-for="chat in chats ">
        <router-link v-if="isMobile" :to="{ name: 'Chat', params: { id: chat.id }}"  :key="chat.id" >
           <ChatItem :chat="chat" />
       </router-link>
       <div v-else @click="setActiveChat(chat.id)" :key="chat.id">
      <ChatItem :chat="chat" />
       </div>
     </template >
   </div>

  </div>
</template>

<script>

import Header from './Header.vue'
import moment from 'moment'
import ChatItem from './ChatItem.vue'
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    chats: Array
  },
  data: () => ({

  }),
  components: {
    Header, ChatItem
  },
  computed: {
    isMobile () {
      return this.winWidth < 1100
    },
    ...mapState([
      'currentUser', 'activeChat', 'winWidth'
    ])
  },
  methods: {
    ...mapActions(['setActiveChat'])
  },
  filters: {
    fromNow: function (value) {
      var a = moment(new Date(value))
      var b = moment(new Date())
      a.from(b)
      return a.from(b)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.chat-list{
  height: 100%;
background-color:#f8f9fa;
}
.chats{

padding: 12px;

}

</style>
