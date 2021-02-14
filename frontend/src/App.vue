<template>
  <div id="canvas" :class="{ night }">
    <SunMoon @changeMode="changeMode"></SunMoon>
    <Roof></Roof>
    <Plaque></Plaque>
    <Foundation :night="night"></Foundation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SunMoon from "./components/SunMoon.vue";
import Roof from "./components/Roof.vue";
import Plaque from "./components/Plaque.vue";
import Foundation from "./components/Foundation.vue";

export default defineComponent({
  name: "App",
  components: {
    SunMoon,
    Roof,
    Plaque,
    Foundation,
  },
  data() {
    return { night: false };
  },
  methods: {
    changeMode() {
      this.night = !this.night;
    },
  },
});
</script>

<style>
body {
  margin: 0;
}
#canvas {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.day {
  background: #fff;
}

.night {
  background: #140547;
}

.night div {
  opacity: 0.7;
}

.night #plaque {
  background: #729861;
  border-color: #608a4b;
}
</style>
