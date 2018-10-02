import Vue from 'vue'
import Vuex from 'vuex'
import {countStore} from "./store/modules/count/index";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countStore
    }
})
