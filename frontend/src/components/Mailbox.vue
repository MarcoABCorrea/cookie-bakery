<template>
  <div id="mailbox">
    <span>Mailbox</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Mailbox",
});
</script>

<style scoped>
#mailbox {
  width: 120px;
  background: #999999;
  height: 100px;
  position: absolute;
  right: 65px;
  bottom: 40px;
}

#mailbox span {
  top: 20%;
  position: absolute;
  left: 10%;
  border-top: 15px solid #666;
  width: 65%;
  padding: 10px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
}
</style>
