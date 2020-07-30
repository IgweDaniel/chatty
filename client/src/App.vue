<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
body{

      height:100vh;
        height: -webkit-fill-available;
        height: calc(var(--vh, 1vh) * 100);
      overflow: hidden;
}
</style>
