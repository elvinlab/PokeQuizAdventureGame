<script>
import Navbar from "@/components/Navbar.vue";
import WelcomeMsg from "@/components/WelcomeMsg.vue";
import Instructions from "@/components/Instructions.vue";
export default {
  components: {
    Navbar,
    WelcomeMsg,
    Instructions,
  },
};
</script>

<template>
  <Navbar />
  <Instructions />
  <WelcomeMsg />
</template>
