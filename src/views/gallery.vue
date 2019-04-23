<template>
  <div class="index">
    <div class="wrap" id="wrap">
      <!--.photo负责位置的居中和旋转-->
      <div
        v-for="image in imageList"
        :key="image.id"
        :id="'photo_'+image.id"
        class="photo photo_front"
        v-bind:class="{ photo_center: centerPicId == image.id }"
        v-on:click="turn(image)"
      >
        <!--.photo-wrap 负责海报的正面和方便的反转-->
        <div class="photo-wrap">
          <!--.side-front 海报正面-->
          <div class="side side-front">
            <p class="image">
              <img v-bind:src="image.src" alt="image">
            </p>
            <p class="caption">{{image.caption}}</p>
          </div>
          <!--.side-back 海报反面-->
          <div class="side side-back">
            <p class="desc">{{image.desc}}</p>
          </div>
        </div>
      </div>
      <div class="nav">
        <span
          v-for="image in imageList"
          :key="image.id"
          :id="'nav_'+image.id"
          v-on:click="turn(image)"
          class="i"
          v-bind:class="{ i_current: centerPicId == image.id }"
        >&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { loadImageData } from "@/services/index";
import { tool } from "../utils/tools";

export default {
  name: "Index",
  data() {
    return {
      imageList: [],
      centerPicId: 0,
      isFront: []
    };
  },
  mounted() {
    this.fetchIndexImages();
  },
  methods: {
    fetchIndexImages() {
      // 从服务端获取图片数据
      this.imageList = loadImageData();
      this.isFront = new Array();
      for (var i = 0; i < this.imageList.length; i++) {
        this.isFront[i] = true;
      }
    },

    turn(image) {
      console.log("Click!");

      if (this.centerPicId != image.id) {
        // 如果点击的图片不在中央，那么执行rsort，将他放置到中央，并重新排列其他图片
        this.rsort(image.id);
        this.centerPicId = image.id;
        // 重置前后翻面的标志位
        this.isFront[image.id] = true;
        return;
      }

      // // 判断当前展示的面是否是正面
      //       if (this.isFront[image.id]) {
      //         cls = cls.replace(/photo_front/, "photo_back");
      //         tool.g("#nav_" + n).className += " i_back";
      //       } else {
      //         cls = cls.replace(/photo_back/, "photo_front");
      //         tool.g("#nav_" + n).className = g("#nav_" + n).className.replace(
      //           /\s*i_back\s*/,
      //           " "
      //         );
      //       }
      return;
    },

    rsort(n) {
      console.log("rsort");

      var _photo = tool.g(".photo");
      var photos = [];
      for (var s = 0; s < _photo.length; s++) {
        _photo[s].className = _photo[s].className.replace(
          /\s*photo_center\s*/,
          " "
        );
        _photo[s].className = _photo[s].className.replace(
          /\s*photo_front\s*/,
          " "
        );
        _photo[s].className = _photo[s].className.replace(
          /\s*photo_back\s*/,
          " "
        );

        _photo[s].className += " photo_front";
        _photo[s].style.left = "";
        _photo[s].style.top = "";
        _photo[s].style["transform"] = "rotate(360deg) scale(1.3)";
        photos.push(_photo[s]);
      }

      this.centerPicId = n;

      // var photo_center = tool.g("#photo_" + n);
      // photo_center.className += " photo_center";
      // //去除在正中间的海报
      // photo_center = photos.splice(n, 1)[0];
      //    把剩下的海报分为左右两部分
      var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
      var photos_right = photos;

      var ranges = this.getRange();
      for (var s in photos_left) {
        var photo = photos_left[s];
        photo.style.left = tool.random(ranges.left.x) + "px";
        photo.style.top = tool.random(ranges.left.y) + "px";
        photo.style["transform"] =
          "rotate(" + tool.random([-150, 150]) + "deg) scale(1)";
      }
      for (var s in photos_right) {
        var photo = photos_right[s];
        photo.style.left = tool.random(ranges.right.x) + "px";
        photo.style.top = tool.random(ranges.right.y) + "px";
        photo.style["transform"] =
          "rotate(" + tool.random([-150, 150]) + "deg) scale(1)";
      }
      //控制按钮处理
      var navs = tool.g(".i");
      for (var s = 0; s < navs.length; s++) {
        navs[s].className = navs[s].className.replace(/\s*i_current\s*/, " ");
        navs[s].className = navs[s].className.replace(/\s*i_back\s*/, " ");
      }
    },

    getRange() {
      console.log(tool.g("#wrap").clientWidth);
      var range = { left: { x: [], y: [] }, right: { x: [], y: [] } };
      var wrap = {
        w: tool.g("#wrap").clientWidth,
        h: tool.g("#wrap").clientHeight
      };
      var photo = {
        w: tool.g("#wrap")[0].clientWidth,
        h: tool.g("#wrap")[0].clientHeight
      };
      console.log(wrap)

      range.wrap = wrap;
      range.photo = photo;
      //左右照片的范围
      //小范围
      range.left.x = [0, wrap.w / 2 - photo.w];
      range.left.y = [0, wrap.h];
      range.right.x = [wrap.w / 2 + photo.w, wrap.w];
      range.right.y = range.left.y;

      console.log(range);
      return range;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/index.css";
</style>
