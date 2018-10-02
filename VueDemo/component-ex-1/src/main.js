import Vue from 'vue'
import App from './App.vue'
import FancyButton from './components/FancyButton.vue';

Vue.config.productionTip = false

// Vue.component('fancy-button', FancyButton);

new Vue({
    render: h => h(App)
}).$mount('#app')
