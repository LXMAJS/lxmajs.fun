<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  width: 100%;
  background-color:darkgray
}
body {
  margin: 0;
}
html,
body {
  height: 100%;
}
.chy-top-pic {
  margin: 0;
  padding: 0;
}
</style>
