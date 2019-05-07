<template>
  <footer>
    <div>
      <span>Made By</span>
      <svg-icon icon-class="li"/>
      <span>LXMAJS</span>
      &nbsp;|&nbsp;
      <a :href="link_github" target="_blank">
        <svg-icon icon-class="GitHub"/>
      </a>&nbsp;
      <a :href="link_weibo" target="_blank">
        <svg-icon icon-class="weibo1"/>
      </a>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      link_weibo: "https://weibo.com/u/2742083607",
      link_github: "https://github.com/LXMAJS",
      link_ins: ""
    };
  }
};
</script>

<style scoped>
footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  margin: 20px 0;
  z-index: 300;
  text-align: center;
  font-size: 12px;
  color: #eee;
  cursor: default;
  user-select: none;
}
</style>

