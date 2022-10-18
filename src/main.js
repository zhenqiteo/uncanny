import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// import BootstrapVue from 'bootstrap-vue'

// import VueScrollFixedNavbar from "vue-scroll-fixed-navbar"
app.use(router).mount('#app')

app.config.errorHandler = (err) =>  {
    console.log(err)
}