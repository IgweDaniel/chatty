<template>
  <div class="list-item" :class="{ active: activeId == id }">
    <div class="chat-image">
      <Avatar :url="listImg" :name="listTitle" size="55px" />
    </div>
    <div class="list-info">
      <div class="list-meta">
        <span class="name">
          {{ listTitle }}
        </span>
        <span class="badge">
          <slot name="badge"></slot>
        </span>
      </div>
      <div class="list-content">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from '../shared'

export default {
  props: ['activeId', 'listImg', 'id', 'listTitle'],

  components: {
    Avatar
  },
  computed: {
    isMobile() {
      return this.winWidth < 1000
    }
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
.active {
  background: #665dfe;
  border: 1px solid #665dfe;
  color: #fff;
}
.active .badge,
.active .list-content {
  color: #f1f1f1 !important;
}
.chat-image {
  width: 20%;
  max-width: 80px;
}
.list-info {
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
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 14px;
}
.list-meta .badge {
  display: block;
  margin-left: auto;
  color: #adb5bd;
  font-size: 14px;
}

.list-content {
  color: #adb5bd;
  font-size: 14px;
  font-weight: 400;
}
</style>
