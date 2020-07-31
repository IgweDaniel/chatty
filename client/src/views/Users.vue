<template>
  <div class="users">
    <Layout>
      <template v-slot:left>
        h
      </template>
      <template v-slot:right>
        m
        <!-- <Conversation :conversation="conversation"/> -->
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: {
    Layout
  }
}
</script>
