import { createApp } from "vue";
import App from "./App.vue";

import AllIosIcon from "vue-ionicons/dist/ionicons-ios.js";

const app = createApp(App);

app.use(AllIosIcon);

app.mount("#app");