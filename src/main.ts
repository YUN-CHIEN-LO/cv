import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";
import lycUi from "@yun-chien-lo/lyc-ui";
import "@yun-chien-lo/lyc-ui/dist/css/lyc-ui.css";

const pinia = createPinia();

createApp(App).use(lycUi).use(router).use(pinia).use(i18n).mount("#app");
