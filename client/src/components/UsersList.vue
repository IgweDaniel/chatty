<template>
  <div class="user-list">
    <Header />
    <div class="users">
      <template v-for="user in users">
        <ListItem
          :setActiveList="setActiveUser"
          :activeId="activeUser"
          :listImg="user.avatar"
          :listTitle="user.name"
          :id="user.id"
          url="Profile"
          :key="user.id"
        >
          <template v-slot:body>
            {{ user.state }}
          </template>
        </ListItem>
      </template>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { ListItem } from './shared'

import {
  mapState
  //  mapActions
} from 'vuex'

export default {
  props: ['activeUser', 'users', 'setActiveUser'],
  components: {
    Header,
    ListItem
  },
  computed: {
    ...mapState(['currentUser', 'winWidth'])
  },
  methods: {
    // ...mapActions(['setActiveChat']),
  },

  mounted() {}
}
</script>

<style scoped>
.users-list {
  height: 100%;
  background-color: #f8f9fa;
}
.users {
  padding: 12px;
}
</style>
