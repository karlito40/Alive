import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import messages from "./i18n";

import "./assets/main.css";

console.log(messages);
const i18n = createI18n({
  locale: navigator?.language,
  fallbackLocale: "fr",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
