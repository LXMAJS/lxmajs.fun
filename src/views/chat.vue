<template>
  <div class="container">
    <div class="chatroom">
      <div class="message">
        <ul>
          <li v-for="item in messages" :key="item.id">
            <a v-if="item.user">{{item.user}} ：</a>
            {{item.text}}
          </li>
        </ul>
      </div>
      <div class="textarea">
        <textarea v-model="text" v-on:keyup="inputing"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      websocket: null,
      messages: [],
      text: "",
      data: ""
    };
  },
  mounted() {
    if ("WebSocket" in window) {
      this.websocket = new WebSocket("ws://localhost:5001/");
      this.initWebSocket();
    } else {
      this.$toast.center("当前浏览器 Not support websocket");
    }
  },
  destroyed() {
    //页面销毁时关闭长连接
    this.closeWebSocket();
  },
  onbeforeunload() {
    this.closeWebSocket();
  },
  methods: {
    initWebSocket() {
      //连接错误
      this.websocket.onerror = this.setErrorMessage;
      // //连接成功
      this.websocket.onopen = this.setOnopenMessage;
      //收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage;
      //连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage;
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload;
    },
    setErrorMessage() {
      messages.push({
        text:
          "WebSocket连接发生错误" + "   状态码：" + this.websocket.readyState
      });
    },
    setOnopenMessage() {
      messages.push({
        text: "WebSocket连接成功" + "   状态码：" + this.websocket.readyState
      });
    },
    setOnmessageMessage(event) {
      let obj = JSON.parse(event.data);
      messages.push(obj);
    },
    setOncloseMessage() {
      messages.push({
        text: "WebSocket连接关闭" + "   状态码：" + this.websocket.readyState
      });
    },
    //websocket发送消息
    send(context) {
      this.websocket.send(context);
    },
    closeWebSocket() {
      this.websocket.close();
    },
    inputing(e) {
      if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
        this.websocket.send(this.text);
        this.text = "";
      }
    }
  }
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
.chatroom {
  min-width: 400px;
  min-height: 400px;
  width: 50%;
  height: 75%;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.9);
  margin-top: 5%;
}

.textarea {
  height: 160px;
  border-top: solid 1px #ddd;
}
.textarea textarea {
  height: 100%;
  width: 100%;
  border: none;
  padding: 0px;
  margin-bottom: 0px;
}
</style>
