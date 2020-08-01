<template>
  <Layout>
    <template v-slot:left>
      <div class="current-user" :style="{ height: vH }">
        <UserDetails :user="currentUser" :isMe="true" />
      </div>
    </template>
    <template v-slot:right>
      <div class="user-profile"></div>
      <h1>Hello</h1>
    </template>
  </Layout>
</template>

<script>
import { UserDetails } from '@/components/shared'
import { mapState, mapGetters } from 'vuex'
import Layout from '@/components/Layout'
export default {
  computed: { ...mapState(['currentUser']), ...mapGetters(['vH']) },
  components: {
    UserDetails,
    Layout
  }
}
</script>

<style scoped>
.profile {
  width: 100%;
  overflow: auto;
}
.current-user {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding-bottom: 20px;
  background-color: #fff;
  /* margin-bottom: 200px; */
}
</style>
