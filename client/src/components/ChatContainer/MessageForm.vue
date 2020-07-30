<template>
<div class="message-box">
  <div class="actions">
      <div class="upload-button clickable">
          <AddIcon/>
      </div>
      <div class="emoji-button clickable">
<EmojiIcon/>
      </div>
  </div>
   <div class="message-input">
          <textarea v-model="messageText" name="" id=""  rows="1" placeholder="Type a message" ></textarea>
      </div>
      <button class="submit-button" @click="sendMessage">
          <div class="icon button" >
              <NextIcon/>
          </div>
      </button>
</div>
</template>

<script>

import AddIcon from '@/assets/svg/add.svg'
import EmojiIcon from '@/assets/svg/emoji.svg'
import NextIcon from '@/assets/svg/arrowNext.svg'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MessageBox',
  data: () => ({ messageText: '' }),
  components: {
    NextIcon, EmojiIcon, AddIcon
  },
  computed: { ...mapState(['activeChat', 'currentUser']) },

  methods: {
    ...mapActions(['createMessage']),
    sendMessage () {
      if (this.messageText.trim() === '') return
      const date = new Date()
      this.createMessage({ chatId: this.activeChat, id: Math.round(Math.random() * 10 + 1), message: this.messageText, time: date.getTime(), sender: this.currentUser })
      this.messageText = ''
    }
  }
}
</script>

<style scoped>
.message-box{
height:79px;
border-top: 1px solid #e5e9f2;
/* padding: 12px 36px; */
    position: fixed;
bottom: 0;
width: 100%;
text-align: start;
    background: #fff;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    align-content: center;
    align-items: center;
}
.actions svg{
      width: 24px;
  height: 24px;
  stroke:#21252959;
}
.actions{

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
}
.actions .clickable{
    display: flex;
    align-items: center;
    justify-content: center;

}
.message-input {

    height: 100%;
    /* width: 100%; */
    display: flex;
    align-items: center;
    /* background: red; */
}
.message-input textarea{
    outline: none;
    border: none;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 20px;
    resize: none;
    padding: 6px 12px;
        font-weight: 500;
       font-family: Inter;
font-size:15px;
}
textarea::placeholder{
    font-weight: 500;
       font-family: Inter;
font-size:15px;
}
.submit-button{
    cursor: pointer;
  background-color: #665dfe;
  height: 48px;
  width: 48px;
  border-radius: 50%;
}
.submit-button:hover{
    background: #665dfeeb;
}
.submit-button:active{
     background: rgb(93 86 218);
}
.submit-button .icon{
    height:100%;
    width: 100%;
      display: flex;
    align-items: center;
    justify-content: center;
}
.submit-button svg{
     width: 24px;
  height: 24px;
  stroke:#fff;
}
</style>
