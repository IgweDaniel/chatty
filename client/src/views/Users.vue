<template>
  <div class="users page">
    <Layout>
      <template v-slot:left>
        <UsersList
          :users="users"
          :setActiveUser="setActiveUser"
          :activeUser="activeUser"
        />
      </template>
      <template v-slot:right>
        <div class="user-profile" :style="{ height: vH }">
          <UserDetails :user="user" />
        </div>

        <!-- <Conversation :conversation="conversation"/> -->
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import UsersList from '@/components/UsersList'
import { UserDetails } from '@/components/shared'

import { users } from '@/data.js'
import { mapGetters } from 'vuex'

export default {
  data: () => ({ users, activeUser: '1' }),
  components: {
    Layout,
    UsersList,
    UserDetails
  },
  computed: {
    ...mapGetters(['vH']),
    user() {
      return this.users.find(user => `${user.id}` === `${this.activeUser}`)
    }
  },
  methods: {
    setActiveUser(id) {
      this.activeUser = id
    }
  }
}
</script>

<style scoped>
.user-profile {
  overflow-y: auto;
  height: 100%;
}
</style>
