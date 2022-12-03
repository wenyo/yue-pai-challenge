import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.scss';
import './assets/style.css';
import router from './router';
// import store from "./store";

createApp(App).use(router).mount('#app');
