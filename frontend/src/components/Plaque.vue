<template>
  <span id="plaque">COOKIE BAKERY</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Plaque",
});
</script>

<style scoped>
#plaque {
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 35px;
  align-items: center;
  right: 60px;
  background: #93c47d;
  border: 7px solid #76a95c;
  color: #274e13;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  top: 240px;
  z-index: 3;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
