<template>
  <Layout>
    <template v-slot:left>
      <div class="current-user" :style="{ height: vH }">
        <Profile :user="currentUser" />
      </div>
    </template>
    <template v-slot:right>
      <div class="user-profile"></div>
      <h1>Hello</h1>
    </template>
  </Layout>
</template>

<script>
import { Profile } from '@/components/shared'
import { mapState, mapGetters } from 'vuex'
import Layout from '@/components/Layout'
export default {
  computed: { ...mapState(['currentUser']), ...mapGetters(['vH']) },
  components: {
    Profile,
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
  /* margin-bottom: 200px; */
}
</style>
