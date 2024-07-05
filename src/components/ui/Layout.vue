<script>
import Navbar from "@/components/ui/Navbar.vue";
import WelcomeMsg from "@/components/ui/WelcomeMsg.vue";
import Instructions from "@/components/misc/Instructions.vue";
import PokeMain from "@/components/game/PokeMain.vue";
export default {
  components: {
    WelcomeMsg,
    Navbar,
    Instructions,
    PokeMain,
  },
};
</script>

<template>
  <WelcomeMsg />
  <div class="animate__animated animate__zoomIn">
    <Navbar />
    <Instructions />
    <PokeMain />
  </div>
</template>
