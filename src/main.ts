import { createApp } from "vue";
import { router } from "./router";

/* import global styles */
import "./styles/index.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMoon,
  faMagnifyingGlass,
  faArrowLeft,
  faSun,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMoon);
library.add(faSun);
library.add(faMagnifyingGlass);
library.add(faArrowLeft);
library.add(faSpinner);

const app = createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
