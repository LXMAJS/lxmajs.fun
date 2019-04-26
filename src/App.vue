<template>
  <div id="app">
    <Head/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import head from "@/components/head";
import footer from "@/components/footer";

export default {
  name: "App",
  components: {
    Footer: footer,
    Head: head
  }
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
