import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import Unicon from 'vue-unicons';
import 'bootstrap/dist/css/bootstrap.min.css'
import { uniMusic, uniCarWash, uniHeart } from 'vue-unicons/dist/icons';

Unicon.add([uniMusic, uniCarWash, uniHeart]);



createApp(App).use(store).use(Unicon).use(router).mount('#app')
