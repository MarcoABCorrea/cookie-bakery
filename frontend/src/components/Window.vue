<template>
  <div class="window-container">
    <div v-if="visible" @mouseover="visible = !visible" class="window"></div>
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
  data() {
    return { visible: true };
  },
});
</script>

<style scoped>
.window {
  margin: 40px 50px;
  display: block;
  height: 130px;
  width: 130px;
  background: #cfe2f3;
  z-index: 4;
  border-radius: 50%;
  border: 7px solid #9fc5e8;
  cursor: pointer;
}

.cookie {
  margin: 40px 50px;
  width: 150px;
  cursor: pointer;
}
</style>
