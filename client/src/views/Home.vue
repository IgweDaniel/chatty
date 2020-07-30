<template>
  <div class="home">
    <Layout>
       <template v-slot:left >
      <ChatList :chats="chats"/>
  </template>
   <template v-slot:right>
    <Conversation/>
  </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import ChatList from '@/components/ChatList.vue'
import Conversation from '@/components/ChatContainer'
import { chats } from '@/data.js'

export default {
  name: 'Home',
  data: () => ({
    chats
  }),
  components: {
    Layout, ChatList, Conversation
  },
  mounted () {
    // console.log(this.chats)
  }
}
</script>
