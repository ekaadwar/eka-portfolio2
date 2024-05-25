import "primevue/resources/themes/aura-light-green/theme.css";
import "./App.scss";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import PrimeVue from "primevue/config";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue);

app.component("Button", Button);
app.component("Menubar", Menubar);

app.mount("#app");
