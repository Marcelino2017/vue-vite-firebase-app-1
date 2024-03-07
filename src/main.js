import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // No es necesario poner la extensión '.js'

createApp(App).use(router).mount('#app');
