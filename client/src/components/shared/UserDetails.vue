<template>
  <div class="user-info hide-scrollBar ">
    <div class="user-actions">
      <div class="page-nav-button" v-if="!isMe">
        <BackButton />
      </div>
      <Avatar :url="user.avatar" :name="user.name" size="100px" />
      <h5 class="username">{{ user.name }}</h5>
      <button v-if="!isMe" @click="initChat" class="button">
        Messgae me
      </button>
    </div>
    <div class="user-details">
      <div class="detail">
        <div class="content">
          <span class="label">Email</span>
          <span class="value">{{ user.email }}</span>
        </div>
        <div class="icon">
          <MailIcon />
        </div>
      </div>
      <div class="detail">
        <div class="content">
          <span class="label">Phone</span>
          <span class="value">{{ user.phone }}</span>
        </div>
        <div class="icon">
          <PhoneIcon />
        </div>
      </div>
      <div class="detail">
        <div class="content">
          <span class="label">Website</span>
          <span class="value">{{ user.website }}</span>
        </div>
        <div class="icon">
          <WebIcon />
        </div>
      </div>
    </div>
    <div class="social">
      <div class="detail" v-for="social in user.socials" :key="social.name">
        <div class="content">
          <span class="label">{{ social.name }}</span>
          <span class="value">{{ social.handle }}</span>
        </div>
        <div class="icon">
          <TwitterIcon v-if="social.name === 'twitter'" />
          <InstaIcon v-else-if="social.name === 'instagram'" />
          <FbIcon v-else-if="social.name === 'facebook'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from '.'
import BackButton from './BackButton.vue'

import MailIcon from '@/assets/svg/mail.svg'
import WebIcon from '@/assets/svg/web.svg'
import PhoneIcon from '@/assets/svg/phone.svg'

import FbIcon from '@/assets/svg/fb.svg'
import InstaIcon from '@/assets/svg/insta.svg'
import TwitterIcon from '@/assets/svg/twitter.svg'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['user', 'isMe'],
  components: {
    Avatar,
    MailIcon,
    WebIcon,
    PhoneIcon,
    TwitterIcon,
    InstaIcon,
    FbIcon,
    BackButton
    // BackButton
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  methods: {
    ...mapActions(['setActiveChat', 'startChat']),
    initChat() {
      this.startChat(this.user)
      if (this.isMobile) {
        this.$router.push({ name: 'Chat' })
      } else {
        this.$router.push({ name: 'Home' })
      }
    },
    mounted() {
      // console.log(this.isMe)
    }
  }
}
</script>

<style scoped>
.user-info {
  height: 100%;
  overflow: auto;
  padding: 24px;
}
.user-actions {
  position: relative;
  height: 233px;
  padding: 20px;
  border: 1px solid #e5e9f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 24px;
}
.page-nav-button {
  position: absolute;
  top: 30px;
  left: 30px;
}
.username {
  font-size: 17px;
  margin: 6px 0;
}
.user-details {
  border: 1px solid #e5e9f2;
  margin-bottom: 24px;
}
.detail {
  height: 64px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e9f2;
}
.detail .content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.detail .content .label {
  text-transform: capitalize;
  font-size: 13.5px;
  color: rgb(173, 181, 189);
  font-weight: 400;
}
.detail .content .value {
  font-size: 14px;
  font-weight: 400;
  color: #495057;
  line-height: 21px;
}
.detail .icon {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
.detail svg {
  height: 20px;
  width: 20px;
}
.social {
  border: 1px solid #e5e9f2;
  margin-bottom: 24px;
}
</style>
