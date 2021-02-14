<template>
  <div id="mailbox" :class="{ drop }" @click="drop = true">
    <span>Mailbox</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mailbox",
  data() {
    return { drop: false };
  },
});
</script>

<style scoped>
#mailbox {
  width: 120px;
  background: #999999;
  height: 100px;
  position: absolute;
  right: 65px;
  bottom: 40px;
  cursor: pointer;
}

#mailbox span {
  top: 20%;
  position: absolute;
  left: 10%;
  border-top: 15px solid #666;
  width: 65%;
  padding: 10px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
}
.drop {
  animation: drop 1.2s forwards;
}

@keyframes drop {
  0% {
    transform-origin: center;
    opacity: 1;
  }
  20% {
    transform: translate3d(0, 20px, 0) rotate3d(0, 0, 1, -10deg);
    opacity: 1;
  }
  40%,
  45% {
    transform: translate3d(0, -20px, 0) rotate3d(0, 0, 1, 10deg);
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 200px, 0) rotate3d(0, 0, 0, 0deg);
  }
}
</style>
