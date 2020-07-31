<template>
  <div id="app" :style="{height:vH}">
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['vH'])
  },
  methods: {
    ...mapActions(['updateHeight'])
  },
  mounted () {
    window.addEventListener('resize', (e) => {
      this.updateHeight({ height: window.innerHeight, width: window.innerWidth })
    })
    this.updateHeight({ height: window.innerHeight, width: window.innerWidth })
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      overflow: hidden;
}
*{
  font-family: 'Inter', sans-serif;
      margin:0;
    padding:0;
    box-sizing: border-box;
}
button{
  box-shadow: none;
  border: none;
  outline: none;
  background: transparent;
}
.clickable{
  cursor: pointer;
}
.page{
  overflow: hidden;
height: 100%;
width: 100%;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
