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
  top: 9px;
  background: transparent;
  z-index: 2;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 185px solid #dd7e6b;
}
</style>
