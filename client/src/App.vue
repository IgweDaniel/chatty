<template>
  <div id="app" :style="{ height: vH }">
    <transition mode="in-out" :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- <transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
      :css="false"
    >
      <router-view></router-view>
    </transition> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  data: () => ({ transitionName: '', tl: new TimelineLite() }),
  computed: {
    ...mapGetters(['vH'])
  },
  methods: {
    ...mapActions(['updateHeight'])
  },
  components: {},
  watch: {
    $route(to, from) {
      const TransitionName =
        from.meta.fromTransitionName || to.meta.toTransitionName
      console.log(to, from)
      console.log(TransitionName)
      this.mode = TransitionName === 'slide' ? 'in-out' : 'out-in'
      this.transitionName = TransitionName || 'default'
    }
  },
  mounted() {
    window.addEventListener('resize', e => {
      this.updateHeight({
        height: window.innerHeight,
        width: window.innerWidth
      })
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
.depth {
  /* display: none; */
}
* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  box-shadow: none;
  border: none;
  outline: none;
  background: transparent;
}
.clickable {
  cursor: pointer;
}
.page {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
}
a {
  text-decoration: none;
  color: inherit;
}

.default-enter-active,
.default-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1ms;
}
/* Just for time */

.default-enter {
  opacity: 1;
}
.default-enter-to {
  opacity: 1;
}

.default-leave {
  opacity: 1;
}
.default-leave-to {
  opacity: 1;
}

/* Slide In */
.slide-enter-active,
.slide-leave-active {
  transition-property: transform opacity;
  transition-timing-function: ease-in-out;
}
/* Just for time */
.slide-enter-active {
  transition-duration: 0.5s;
}
.slide-leave-active {
  transition-duration: 1ms;
}

.slide-enter {
  position: fixed;
  z-index: 1000;
  transform: translateX(1000px);
}
.slide-enter-to {
  transform: translateX(0px);
}

.slide-leave {
  z-index: -1000;
  opacity: 1;
}
.slide-leave-to {
  z-index: -1000;
  opacity: 0;
}

/* Slide Out */

.back-enter-active,
.back-leave-active {
  transition-property: transform opacity;
  transition-timing-function: ease-in-out;
}
/* Just for time */
.back-enter-active {
  transition-duration: 1ms;
}
.back-leave-active {
  transition-duration: 0.5s;
}

.back-enter {
  opacity: 0;
  z-index: -2000;
}
.back-enter-to {
  z-index: -2000;
  opacity: 0.2;
}

.back-leave {
  z-index: 2000;
  position: fixed;
  transform: translateX(0px);
  opacity: 1;
}
.back-leave-to {
  z-index: 2000;
  opacity: 1;
  transform: translateX(1000px);
}
</style>
