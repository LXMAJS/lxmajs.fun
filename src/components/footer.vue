<template>
  <footer>
    <div>
      <a>Made By</a>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaolian"></use>
      </svg>
      <a>LXMAJS</a>
      &nbsp;|&nbsp;
      <a :href="link_github" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-GitHub"></use>
        </svg>
      </a>&nbsp;
      <a :href="link_weibo" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo1"></use>
        </svg>
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

