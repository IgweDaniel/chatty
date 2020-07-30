<template>
  <div id="nav">
    <div class="links">
      <router-link to="/"  exact active-class="link-active" class="link">
        <ChatIcon />
      </router-link>
      <router-link to="/profile" active-class="link-active" class="link">
        <ProfileIcon />
      </router-link>
      <router-link to="/users" active-class="link-active" class="link">
        <UserIcon />
      </router-link>
    </div>
  </div>
</template>

<script>
import ChatIcon from '@/assets/svg/chat.svg'
import ProfileIcon from '@/assets/svg/profile.svg'
import UserIcon from '@/assets/svg/users.svg'

export default {
  components: {
    ChatIcon,
    UserIcon,
    ProfileIcon
  }
}
</script>

<style scoped>
#nav {
  position: absolute;
  height: 60px;
  bottom: 0;
  width: 100%;
  background-color: #665dfe;
  color: #fff;
}
.links{
display: flex;
align-items: center;
justify-content: center;
height:100%;
}
.link{
  display: flex;
align-items: center;
justify-content: center;

  flex :1
}
.link svg {
  stroke: #b9b4fe;
  width: 24px;
  height: 24px;
}
.link-active svg {
  stroke: #fff;
}
@media (min-width: 1200px) {
  #nav {
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
    top: 0;
    width: 70px;
    display: flex;
align-items: center;
justify-content: center;
  }
.links{
flex-direction: column;
height:200px;
}
}
</style>
