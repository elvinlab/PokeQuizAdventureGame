<template>
  <div>
    <button
      v-if="isSpanish"
      @click="toggleLanguage"
      type="button"
      class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 rounded-full me-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g fill-rule="evenodd">
          <path fill="#002b7f" d="M0 0h512v512H0z" />
          <path fill="#fff" d="M0 85.3h512v341.4H0z" />
          <path fill="#ce1126" d="M0 170.7h512v170.6H0z" />
        </g>
      </svg>
      Español (CR)
    </button>

    <button
      v-else
      @click="toggleLanguage"
      type="button"
      class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="w-5 h-5 rounded-full me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 3900 3900"
      >
        <path fill="#b22234" d="M0 0h7410v3900H0z" />
        <path
          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
          stroke="#fff"
          stroke-width="300"
        />
        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
        <g fill="#fff">
          <g id="d">
            <g id="c">
              <g id="e">
                <g id="b">
                  <path
                    id="a"
                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                  />
                  <use xlink:href="#a" y="420" />
                  <use xlink:href="#a" y="840" />
                  <use xlink:href="#a" y="1260" />
                </g>
                <use xlink:href="#a" y="1680" />
              </g>
              <use xlink:href="#b" x="247" y="210" />
            </g>
            <use xlink:href="#c" x="494" />
          </g>
          <use xlink:href="#d" x="988" />
          <use xlink:href="#c" x="1976" />
          <use xlink:href="#e" x="2470" />
        </g>
      </svg>
      English (US)
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSpanish: false,
    };
  },
  mounted() {
    this.checkLanguage();
  },
  methods: {
    checkLanguage() {
      const storedLocale = localStorage.getItem("selectedLang");
      if (storedLocale) {
        this.isSpanish = storedLocale === "es";
        this.$i18n.locale = storedLocale;
      } else {
        const language = navigator.language || navigator.userLanguage;
        this.isSpanish = language.includes("es");
        this.$i18n.locale = this.isSpanish ? "es" : "en";
      }
    },
    toggleLanguage() {
      this.isSpanish = !this.isSpanish;
      const newLocale = this.isSpanish ? "es" : "en";
      this.$i18n.locale = newLocale;
      localStorage.setItem("selectedLang", newLocale);
    },
  },
};
</script>

<style scoped>
.me-2 {
  margin-right: 0.5rem;
}
.me-3 {
  margin-right: 0.75rem;
}
</style>
