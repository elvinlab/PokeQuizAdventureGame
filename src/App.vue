<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <router-view></router-view>
</template>
<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
