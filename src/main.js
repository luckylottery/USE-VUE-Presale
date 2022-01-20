import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/main.scss";
import "./assets/css/style.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ToggleButton } from 'vue-js-toggle-button'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

Vue.use(VueCharts);
Vue.use(Bar, Line);

Vue.component('ToggleButton', ToggleButton)
Vue.use(ToggleButton)
    // Vue.use(VueToggle)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')