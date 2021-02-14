<template>
  <div id="door">
    <div id="door-knob"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Door",
});
</script>

<style scoped>
#door {
  position: absolute;
  width: 170px;
  background: #f6b26b;
  height: 320px;
  bottom: 0;
  left: 215px;
}

#door-knob {
  background: #b46126;
  left: 15px;
  height: 8px;
  width: 43px;
  bottom: 150px;
  position: absolute;
}
</style>
