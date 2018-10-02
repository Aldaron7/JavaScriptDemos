import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {userRoutes} from "./components/user/user.routes";


Vue.use(Router)

export default new Router({
    routes: [...userRoutes]
})
