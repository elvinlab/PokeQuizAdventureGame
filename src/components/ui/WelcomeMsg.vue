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
      <div class="flex justify-center">
        <img
          src="@/assets/welcome-img.webp"
          class="mb-4 h-2/5 w-2/5 text-center rounded-lg"
          alt="Welcome Image"
        />
      </div>

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