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
  align-items: center;
  background: #93c47d;
  border: 3px solid #76a95c;
  color: #274e13;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  z-index: 3;
  font-family: Arial, Helvetica, sans-serif;
  top: 65px;
  right: 65px;
  height: 5px;
}
</style>
