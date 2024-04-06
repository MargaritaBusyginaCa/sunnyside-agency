import { createApp } from "vue";
import App from "./App.vue";
import enLocale from "@/locale/en.json";
import frLocale from "@/locale/fr.json";
import { createI18n } from "vue-i18n";

const messages = {
  en: enLocale,
  fr: frLocale,
};

// 2. Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

const app = createApp(App);
app.use(i18n);

app.mount("#app");
