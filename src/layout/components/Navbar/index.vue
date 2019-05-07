<template>
  <div class="navbar">
    <Menu/>
    <Logo/>
  </div>
</template>

<script>
import Menu from "./Menu";
import Logo from "./Logo";

export default {
  components: {
    Menu,
    Logo
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: relative;
}
</style>
