<template>
  <div id="roof"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Roof",
});
</script>

<style scoped>
#roof {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 300px solid transparent;
  border-right: 300px solid transparent;
  border-bottom: 280px solid #dd7e6b;
  background: transparent;
  z-index: 2;
}
</style>
