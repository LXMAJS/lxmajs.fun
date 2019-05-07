<template>
  <nav class="nav-menu">
    <MenuItem
      v-for="route in routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
      class="nav-menu-item"
    />
  </nav>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  data() {
    return {
      activeIndex: "index"
    };
  },
  components: {
    MenuItem
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
  float: right;
  margin-right: 50px;

  &-item {
    float: left;
    padding: 10px;
    cursor: pointer;
  }
  &-item:hover {
    color: cornsilk;
  }
}
</style>
