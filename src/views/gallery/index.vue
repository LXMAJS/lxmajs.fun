<template>
  <div class="index">
    我是画廊
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      bannerHeight: null,
      bgImages: [
        {
          name: "bg1",
          src: require("@/assets/background/bg1.png")
        },
        {
          name: "bg2",
          src: require("@/assets/background/bg2.png")
        },
        {
          name: "bg3",
          src: require("@/assets/background/bg3.jpg")
        },
        {
          name: "bg-common",
          src: require("@/assets/background/bg-common.jpg")
        }
      ]
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.image[0].height;
      },
      false
    );
  },
  methods: {
    setSize: function() {
      this.bannerHeight = (740 / 2560) * this.screenWidth;
      if (this.bannerHeight < 740) this.bannerHeight = 740;
      if (this.bannerHeight > 360) this.bannerHeight = 360;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  
}

.bannerImg {
  width: 100%;
  height: inherit;
  min-height: 360px;
  min-width: 1400px;
}
</style>
