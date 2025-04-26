import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosPlugin from './plugin/axios';
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(axiosPlugin);
app.use(createPinia());
app.mount("#app");
AOS.init({
  duration: 1200, // Opcional: duración de la animación
});
