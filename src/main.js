import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AllIosIcon from "vue-ionicons/dist/ionicons-ios.js";
import "@/assets/base.css";

const app = createApp(App);

app.use(AllIosIcon);
app.use(router);
app.mount("#app");
