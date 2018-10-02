import Vue from "vue";
import App from "./App.vue";
import {convertDateToString} from "./filters/date.filter";


Vue.config.productionTip = false;
Vue.filter('date', convertDateToString);

new Vue({
    render: h => h(App)
}).$mount("#app");
