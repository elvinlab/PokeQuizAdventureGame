import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import dictionary from "@/i18n/dictionary.js";
import routes from "@/routes";
import App from "@/App.vue";

import "./style.css";

const i18n = createI18n({
  locale:
    localStorage.getItem("selectedLag") ||
    (navigator.language.startsWith("es") ? "es" : "en"),
  fallbackLocale: "en",
  messages: dictionary,
});

const app = createApp(App);
app.use(routes);
app.use(i18n);

app.mount("#app");
