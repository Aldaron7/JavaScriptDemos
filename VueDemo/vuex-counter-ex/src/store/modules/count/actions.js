import * as types from "./mutation-types";

export default {
    // destructuring store to only use commit instead of store.commit
    [types.INCREMENT]({commit}, amount) {
        commit(types.INCREMENT, amount);
    },
    [types.DECREMENT]({commit}, amount) {
        commit(types.DECREMENT, amount);
    },
    [types.RESET]({commit}) {
        commit(types.RESET);
    }
}