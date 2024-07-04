<template>
  <button @click="toggleTheme" class="p-2 text-2xl">
    {{ isDark ? "☀️" : "🌑" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
  mounted() {
    // Check the user's theme preference from localStorage
    this.isDark = localStorage.getItem("theme") === "dark";
    this.setTheme();
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
      this.setTheme();
    },
    setTheme() {
      if (this.isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>
