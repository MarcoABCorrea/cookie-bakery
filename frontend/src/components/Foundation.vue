<template>
  <div id="foundation">
    <Window class="left" :night="night"></Window>
    <Window class="right" :night="night"></Window>
    <Door :night="night"></Door>
    <Mailbox></Mailbox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Window from "./Window.vue";
import Door from "./Door.vue";
import Mailbox from "./Mailbox.vue";
export default defineComponent({
  name: "Foundation",
  props: {
    night: Boolean,
  },
  components: {
    Window,
    Door,
    Mailbox,
  },
});
</script>

<style scoped>
#foundation {
  position: absolute;
  margin-top: 280px;
  width: 600px;
  background: #cccccc;
  height: 400px;
}

.right {
  float: right;
}

.left {
  float: left;
}
</style>
