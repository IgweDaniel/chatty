<template>
  <div class="chat-list">
    <Header/>
       <router-link to="/chat" active-class="link-active" class="link">
       click me</router-link>
   <div class="chats" >
     <div class="chat-item" :class="{ active: activeChat==chat.id}" v-for="chat in chats " :key="chat.id" @click="setActiveChat(chat.id)">
       <div class="chat-image">
         <Avatar :url="chat.chatImg" name size="55px"/>
       </div>
       <div class="chat-info">
         <div class="chat-meta">
<span class="name">
  {{chat.name}}
</span>
<span class="time">
    {{chat.messages[chat.messages.length-1].time | fromNow}}
</span>
  </div>
<div class="chat-body">
  <span class="user" v-if="currentUser.name !== chat.messages[chat.messages.length-1].sender.name">
      {{chat.messages[chat.messages.length-1].sender.name }}:
  </span>

       {{chat.messages[chat.messages.length-1].message}}
</div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>

import Header from './Header.vue'
import { Avatar } from './shared'
import moment from 'moment'

import { mapState, mapActions } from 'vuex'
export default {
  props: {
    chats: Array
  },
  components: {
    Header, Avatar
  },
  computed: {
    ...mapState([
      'currentUser', 'activeChat'
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
    console.log(this.chats)
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
.chat-item{
  cursor: pointer;
  border: 1px solid #e5e9f2;
  display: flex;
height:82px;
margin:12px 0;
align-items: center;
font-weight: 400;
border-radius: 4px;
padding: 16px 20px;
}
.active{
background: #665dfe;
    border: 1px solid #665dfe;
    color:#fff
}
.active .time, .active .chat-body{
    color:#f1f1f1 !important
}
.chat-image{
width:20%;
max-width: 80px;
}
.chat-info{
    display: flex;
justify-content: center;
flex-direction: column;
  text-align: start;
  height:100%;
flex:1;
}
.chat-meta{
  display: flex;
  align-items: center;

}
.chat-meta .name{
    display: block;
    font-weight: 500;
    margin-bottom: 6px;

}
 .chat-meta .time{
  display: block;
margin-left:auto;
    color: #adb5bd;
    font-size: 14px;

}

.chat-body{
      color: #adb5bd;
      font-size:14px;
      font-weight:400;
}
</style>
