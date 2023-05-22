import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./index.css"
import VueLazyload from 'vue-lazyload';
import loading from '@/assets/img/loading.png'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'







createApp(App).component('font-awesome-icon',FontAwesomeIcon).use(store).use(router).use(VueLazyload,{loading: loading, error:''}).use(AOS).mount('#app')
