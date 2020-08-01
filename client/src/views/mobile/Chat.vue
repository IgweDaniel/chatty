<template>
  <div class="chatt page depth">
    <ChatBox :conversation="conversation" />
  </div>
</template>

<script>
import ChatBox from '@/components/ChatContainer'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ChatBox
  },
  computed: {
    ...mapState(['chats']),
    ...mapGetters(['conversation'])
  },
  methods: {
    ...mapActions(['setActiveChat'])
  },
  mounted() {}
}
</script>

<style scoped>
.chatt {
  background-color: #fff;
}
</style>
