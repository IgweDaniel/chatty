<template>
  <div class="profile" :style="{ height: vH }">
    <Profile :user="user" />
  </div>
</template>

<script>
import { Profile } from '@/components/shared'
import { users } from '@/data.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Layout
    Profile
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
  position: absolute;
  width: 100%;
  overflow: auto;
}
</style>
