<template>
  <div @click="goToPage" :key="id">
    <div class="list-item" :class="{ selected: activeId == id }">
      <div class="list-image">
        <Avatar :url="listImg" :name="listTitle" size="55px" />
      </div>
      <div class="list-info">
        <div class="list-meta">
          <span class="name">
            {{ listTitle }}
          </span>
          <span class="tag">
            <slot name="tag"></slot>
          </span>
        </div>
        <div class="list-content">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from '../shared'
import { mapState, mapGetters } from 'vuex'

export default {
  props: [
    'activeId',
    'listImg',
    'id',
    'listTitle',
    'page',
    'setActiveList',
    'pagePerId'
  ],
  computed: {
    ...mapGetters(['isMobile']),
    ...mapState(['currentUser', 'activeChat', 'winWidth'])
  },
  methods: {
    goToPage() {
      this.setActiveList(this.id)
      if (this.isMobile) {
        if (this.pagePerId) {
          this.$router.push({ name: this.page, params: { id: this.id } })
        } else {
          this.$router.push({ name: this.page }, () => {
            // console.log(this)
          })
        }
      }
    }
  },
  components: {
    Avatar
  }
}
</script>

<style scoped>
.list-item {
  cursor: pointer;
  border: 1px solid #e5e9f2;
  display: flex;
  height: 82px;
  margin: 12px 0;
  align-items: center;
  font-weight: 400;
  border-radius: 4px;
  padding: 16px 20px;
}
.list-item:hover {
  border: 1px solid var(--theme-color);
}
.list-item:active {
  border: 1px solid var(--theme-color);
}
.selected {
  background: var(--theme-color);

  border: 1px solid var(--theme-color);
  color: #fff;
}
.selected .tag,
.selected .list-content,
.selected svg {
  color: #f1f1f1 !important;
}
.list-image {
  width: 20%;
  max-width: 60px;
}
.list-info {
  padding: 0 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  height: 100%;
  flex: 1;
}
.list-meta {
  display: flex;
  align-items: center;
}
.list-meta .name {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 14px;
}
.list-meta .tag {
  display: block;
  margin-left: auto;
  color: #adb5bd;
  font-size: 14px;
}

.list-content {
  color: #adb5bd;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  overflow: hidden;
}
</style>
