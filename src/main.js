import { createApp } from 'vue'
import '/node_modules/primeflex/primeflex.css'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
