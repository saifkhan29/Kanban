import { createApp } from 'vue'
import './style.css'
import '../src/css/main.scss'
import App from './App.vue'
import store from './store'

// Create Vue app instance
const app = createApp(App);

// Use Vuex store
app.use(store);

// Mount the app
app.mount('#app');

