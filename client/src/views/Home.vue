<template>
  <div class="home page">
    <Layout>
      <template v-slot:left>
        <ChatList :chats="chats" />
      </template>
      <template v-slot:right>
        <ChatBox :conversation="conversation" />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import ChatList from '@/components/ChatList.vue'
import ChatBox from '@/components/ChatContainer'
// import { chats } from '@/data.js'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    // chats
  }),
  components: {
    Layout,
    ChatList,
    ChatBox
  },
  computed: {
    ...mapState(['chats']),
    ...mapGetters(['conversation'])
  },
  mounted() {
    // console.log(this.chats)
  }
}
</script>

<style></style>
