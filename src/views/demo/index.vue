<template>
  <div class="container">啥也没有</div>
</template>

<script>
export default {
  name:'Demo',
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  margin-top: 0px;
  // background: url("../../assets/background/bg-common.jpg") no-repeat;
  background: #eee;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;

  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
