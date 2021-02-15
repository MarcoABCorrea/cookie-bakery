<template>
  <div id="door" @click="order" :disabled="night">
    <div id="door-knob"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "Door",
  props: {
    night: Boolean,
  },
  methods: {
    order() {
      axios
        .post("http://localhost:3001")
        .then((result) => {
          console.log("Cookie ordered!", result.data);
        })
        .catch(() => {
          console.error("Some error occurred!");
        });
    },
  },
});
</script>

<style scoped>
#door {
  position: absolute;
  background: #f6b26b;
  height: 225px;
  width: 115px;
  bottom: 0;
  left: 145px;
  cursor: pointer;
}

#door[disabled="true"] {
  pointer-events: none;
}

#door-knob {
  position: absolute;
  background: #b46126;
  left: 10px;
  height: 7px;
  width: 35px;
  bottom: 115px;
}
</style>
