<template>
  <div class="window-container">
    <div
      v-if="visible"
      @mouseover="visible = !visible"
      class="window"
      :disabled="night"
    ></div>
    <img
      v-else
      @mouseleave="visible = !visible"
      class="cookie"
      src="../assets/cookie.png"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Window",
  props: {
    night: Boolean,
  },
  data() {
    return { visible: true };
  },
});
</script>

<style scoped>
.window {
  margin: 40px 25px;
  display: block;
  height: 85px;
  width: 85px;
  background: #cfe2f3;
  z-index: 4;
  border-radius: 50%;
  border: 4px solid #9fc5e8;
  cursor: pointer;
}

.window[disabled="true"] {
  pointer-events: none;
}

.cookie {
  margin: 40px 25px;
  width: 100px;
  cursor: pointer;
}
</style>
