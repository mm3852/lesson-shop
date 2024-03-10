import { createApp } from "vue";
import App from "./App.vue";
import Lesson from "./components/Lesson.vue";
import Ordering from "./components/Ordering.vue";
const app = createApp(App);
app.component("Lesson", Lesson);
app.component("Ordering", Ordering);
app.mount("#app");
