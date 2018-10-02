import Vue from 'vue'
import App from './App.vue'
import SocketIo from "socket.io-client";
import VueSocketIo from "vue-socket.io";
import ConnectionStatus from "./components/ConnectionStatus";
import Navbar from "./components/Navbar";



export const Socket = SocketIo('http://localhost:3000');

Vue.config.productionTip = false;
Vue.use(VueSocketIo, Socket);
Vue.component('connection-status', ConnectionStatus);
Vue.component('navigation-bar', Navbar);

new Vue({
    render: h => h(App)
}).$mount('#app');
