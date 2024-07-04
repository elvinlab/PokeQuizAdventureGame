<template>
  <div
    v-if="showWelcome"
    class="fixed inset-0 flex items-center justify-center bg-red-100 p-4 shadow-lg z-50"
  >
    <div class="text-center">
      <p class="text-red-800 text-lg">
        {{ `${$t("welcome")} Poke Quiz Adventure Game` }}
      </p>
      <button
        @click="handleReady"
        class="mt-4 px-4 py-2 bg-red-800 text-white rounded"
      >
        Estoy listo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWelcome: true,
    };
  },
  mounted() {
    if (localStorage.getItem("welcomeDismissed")) {
      this.showWelcome = false;
    }
  },
  methods: {
    handleReady() {
      this.showWelcome = false;
      localStorage.setItem("welcomeDismissed", "true");
    },
  },
};
</script>
