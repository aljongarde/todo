import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IndexLayout from '@/components/Layouts/IndexLayout.vue'
import './index.css'
import 'flowbite'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.component("default-layout", IndexLayout);

createApp(App).use(store).use(router).mount('#app')
