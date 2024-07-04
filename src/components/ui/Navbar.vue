<script>
import ThemeSwitcher from "@/components/control/ThemeSwitcher.vue";
import LanguageSwitcher from "@/components/control/LanguageSwitcher.vue";
import { Config } from "@/helpers/config.js";

export default {
  components: {
    ThemeSwitcher,
    LanguageSwitcher,
  },
  data() {
    return {
      Config: Config,
    };
  },
};
</script>
<template>
  <nav class="backdrop-blur-xl bg-white/30 dark:bg-[#1d1d2c]">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/logo.svg" class="h-8" alt="Poke Game Logo" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Poke Game</span
        >
      </router-link>
      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
      >
        <ThemeSwitcher />
        <LanguageSwitcher />
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-menu"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-2 mt-4 border border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li>
            <button
              data-modal-target="static-modal"
              data-modal-toggle="static-modal"
              class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              type="button"
            >
              {{ $t("instructionsTitle") }}
            </button>
          </li>
          <li>
            <a
              :href="Config.GITHUB_REPOSITORY"
              target="_blank"
              class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("repository") }}</a
            >
          </li>
          <li>
            <a
              :href="Config.WEBSITE_LINK"
              target="_blank"
              class="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{ $t("website") }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
