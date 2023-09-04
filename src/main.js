import { createApp } from 'vue'
import { createI18n } from "vue-i18n";

import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import Unicon from 'vue-unicons';
import 'bootstrap/dist/css/bootstrap.min.css'
import { uniMusic, uniCarWash, uniHeart } from 'vue-unicons/dist/icons';
import DataTable from 'datatables.net-vue3';
import Select from 'datatables.net-select';
 
DataTable.use(Select);

// lang
// const lang = localStorage.getItem("lang")
document.documentElement.lang = store.state.lang

// import translations
import ar from "./locales/ar.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  locale: store.state.lang || "en",
  fallbackLocale: "en",
  messages: { ar, en },
});


Unicon.add([uniMusic, uniCarWash, uniHeart]);

createApp(App)
  .use(store)
  .use(Unicon)
  .use(router)
  .use(i18n)
  .mount('#app');
