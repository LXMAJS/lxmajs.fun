<template>
  <div class="timer">
    <div class="timer-block" id="hour">{{clock.hour}}</div>
    <b class="timer-seperator">:</b>
    <div class="timer-block" id="min">{{clock.min}}</div>
    <b class="timer-seperator">:</b>
    <div class="timer-block" id="sec">{{clock.sec}}</div>
  </div>
</template>

<script>
let interval = null;

export default {
  data() {
    return {
      clock: {
        hour: "",
        min: "",
        sec: ""
      },
      curTime: 0
    };
  },
  mounted() {
    let deadline = 1555642800000;
    this.curTime = 1555639938000;

    this.startTimer(deadline - this.curTime);
  },
  beforeDestroy() {
    clearInterval(interval);
  },
  methods: {
    startTimer(timestamp) {
      if (timestamp <= 0) return;

      let self = this;
      interval = setInterval(() => {
        // 减去1秒
        timestamp -= 1000;
        if (timestamp <= 0) {
          clearInterval(interval);
          return;
        }

        // 转换为时间。此处假设timestamp的跨度不超过1个月
        let time = new Date(timestamp);
        let day = time.getDate();
        let hour = time.getHours();
        // 此处简单处理下时间戳的计算问题
        // 时间戳 0 表示 1970-01-01 08:00:00，因此hour需要减去8小时。
        // 若减去8小时后 hour小于0，则需要从 day中获取
        // 若day被减后小于0，则计算错误，直接跳出方法不执行计划任务
        hour -= 8;
        if (hour < 0) {
          day--;
          hour += 24;
          if (day < 0) return;
        }
        let min = time.getMinutes();
        let sec = time.getSeconds();

        // 超过1天，加24小时
        if (day > 1) {
          hour += day * 24;
        }

        // 格式化显示时间，此处也可改为过滤器方式进行格式化
        self.clock = {
          hour: hour >= 10 ? hour : "0" + hour,
          min: min >= 10 ? min : "0" + min,
          sec: sec >= 10 ? sec : "0" + sec
        };
      }, 1000);
    }
  }
};
</script>


<style scoped>
.timer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 10px 0;
  color: white;
}
.timer-block {
  width: 30px;
  height: 30px;
  background: #444;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
}
.timer-seperator {
  padding: 0 3px;
  color: #000;
}
</style>