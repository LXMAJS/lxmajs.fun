<template>
  <div :class="classObject" class="app-wrapper">
    <div class="main-container">
      <Navbar></Navbar>
      <AppMain></AppMain>
      <Footer></Footer>
    </div>
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
.main-container{
  position: absolute;
  margin-top: 0px;
  // background: url("../assets/background/bg-common.jpg") no-repeat;
  background: #eee;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  color: #eeeeee;
}
</style>
