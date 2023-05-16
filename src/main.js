import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./index.css"
import VueLazyload from 'vue-lazyload';


createApp(App).use(store).use(router).use(VueLazyload).mount('#app')
