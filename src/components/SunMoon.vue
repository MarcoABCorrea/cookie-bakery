<template>
  <div id="sun" v-if="visible" @click="night()"></div>
  <div id="moon" v-else @click="day()"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SunMoon",
  data() {
    return { visible: true };
  },
  methods: {
    day() {
      this.visible = true;
      this.$emit("changeMode");
    },
    night() {
      this.visible = false;
      this.$emit("changeMode");
    },
  },
});
</script>

<style scoped>
div {
  position: relative;
  cursor: pointer;
  height: 100px;
  width: 100px;
  top: 10px;
  border-radius: 50%;
  z-index: 5;
}

#sun {
  left: 270px;
  background: #fae83d;
}

#moon {
  right: 100px;
  box-shadow: 15px 15px 0 0 #c7b5b5;
}
</style>
