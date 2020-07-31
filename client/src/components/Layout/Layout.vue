<template>
    <div class="layout">
    <Nav/>
   <main>
     <div class="left">
 <slot name="left"></slot>
     </div>

     <div class="right" >
 <slot name="right" ></slot>
     </div>

   </main>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['activeChat'])
  },
  mounted () {

  },
  components: {
    Nav
  }
}
</script>

<style scoped>
.layout{
  position: relative;
  height:100%;
width: 100%;
  overflow: hidden;

}
main{

  display: grid;
   height: 100%;
grid-template-columns: repeat(1,1fr);
}
.right,.left{
    height: 100%;
}
.right{
  position: absolute;
  background: #fff;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: none;

/* transform:translateX(1000px); */
transition: 0.5s ease-in-out
}
.show{
  transition: 0.5s ease-in-out;
/* transform:translateX(0px) */
}

@media (min-width: 1200px) {
main{
  width: calc(100% - 70px);
  margin-left: auto;
grid-template-columns: repeat(3,1fr);
}
.left{

  border-right:1px solid #e5e9f2;
}
.right{
  transform:translateX(0px);
  grid-column: span 2;
  position: static;
  display: block;
  border-right:1px solid #e5e9f2; ;
}
}
</style>
