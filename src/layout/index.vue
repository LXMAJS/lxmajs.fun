<template>
  <div :class="classObject" class="app-wrapper">
    <Navbar></Navbar>
    <AppMain></AppMain>
    <Footer></Footer>
  </div>
</template>

<script>
import { Navbar, Footer, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Navbar,
    Footer,
    AppMain
  },
  computed: {
    classObject() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
