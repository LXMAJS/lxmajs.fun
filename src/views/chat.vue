<template>
  <div class="container">Hello</div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: absolute;
  margin-top: 0px;
  background: url("../assets/background/bg1.png") no-repeat;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;

  display: flex;
  justify-content: center;
  flex-direction: row;
}
.game-center {
  width: 450px;
  height: 400px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin-top: 12%;
}
</style>
