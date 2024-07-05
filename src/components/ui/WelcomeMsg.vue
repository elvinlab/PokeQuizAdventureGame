<template>
  <div
    v-if="showWelcome"
    class="fixed overflow-y-auto inset-0 flex items-center justify-center bg-white p-4 shadow-lg z-50 animate__animated animate__backInDown animate__delay-2s"
  >
    <div class="text-center">
      <p class="text-red-800 text-3xl font-bold mb-2">
        {{ `${$t("welcome")} Poke Quiz Adventure Game` }}
      </p>
      <p class="text-red-800 text-xl font-bold mb-2">
        {{ `${$t("welcomeP1")}` }}
      </p>
      <p class="text-red-800 text-lg mb-4 italic">
        {{ `${$t("welcomeP2")}` }}
      </p>
      <img
        src="@/assets/welcome-img.webp"
        class="mb-4 max-w-full rounded-lg border-gradient"
        alt="Welcome Image"
      />

      <button
        @click="handleReady"
        class="mt-4 px-4 py-2 bg-red-800 text-white rounded font-bold hover:bg-red-700"
      >
        {{ `${$t("welcomeButton")} 🚀` }}
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

<style scoped>
.welcome-enter-active,
.welcome-leave-active {
  transition: opacity 0.5s;
}
.welcome-enter,
.welcome-leave-to {
  opacity: 0;
}

.border-gradient {
  border-image: linear-gradient(to right, #ff4a00, #ffcc00);
  border-image-slice: 1;
}
</style>
