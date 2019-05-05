<template>
  <div class="navbar">
    Hello
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  data() {
    return {
      activeIndex: 1
    };
  },
  components: {
    Menu
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: relative;
  background: rgba(84, 92, 100, 0.6);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
