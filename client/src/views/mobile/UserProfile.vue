<template>
  <div class="profile depth" :style="{ height: vH }">
    <UserDetails :user="user" />
  </div>
</template>

<script>
import { UserDetails } from '@/components/shared'
import { users } from '@/data.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserDetails
  },
  data: () => ({ users }),
  computed: {
    ...mapGetters(['vH']),
    user() {
      return this.users.find(
        user => `${user.id}` === `${this.$route.params.id}`
      )
    }
  }
}
</script>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fff;
}
</style>
