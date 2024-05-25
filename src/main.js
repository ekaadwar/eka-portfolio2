import "primevue/resources/themes/aura-light-green/theme.css";
import "./App.scss";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from "primevue/menubar";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("Button", Button);

app.mount("#app");
