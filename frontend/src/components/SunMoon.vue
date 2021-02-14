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
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: relative;
  top: 10px;
  cursor: pointer;
}

#sun {
  left: 400px;
  background: #fae83d;
}
#moon {
  right: 200px;
  box-shadow: 15px 15px 0 0 #c7b5b5;
}
</style>
