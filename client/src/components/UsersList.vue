<template>
  <div class="users-list">
    <Header />
    <div class="users">
      <template v-for="user in users">
        <ListItem
          :setActiveList="setActiveUser"
          :activeId="activeUser"
          :listImg="user.avatar"
          :listTitle="user.name"
          :id="user.id"
          page="Profile"
          :pagePerId="true"
          :key="user.id"
        >
          <template v-slot:body>
            <div class="user-location">
              <span class="icon">
                <MapIcon />
              </span>
              <span class="value">
                {{ user.location }}
              </span>
            </div>
          </template>
        </ListItem>
      </template>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { ListItem } from './shared'
import MapIcon from '@/assets/svg/map.svg'
import {
  mapState
  //  mapActions
} from 'vuex'

export default {
  props: ['activeUser', 'users', 'setActiveUser'],
  components: {
    Header,
    ListItem,
    MapIcon
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
}
.users {
  padding: 12px;
}
.icon {
  display: flex;
  align-items: center;
}
.icon svg {
  height: 20px;
  width: 20px;
}
.value {
  margin: 0 4px;
}
.user-location {
  display: flex;
  align-items: center;
}
</style>
