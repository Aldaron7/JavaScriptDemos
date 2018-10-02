<template>
    <div>
        <h1>{{count}}</h1>

        <div><input type="number" v-model="amount"/></div>

        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">R</button>
    </div>
</template>

<script>
    import * as typesCount from "./store/modules/count";


    export default {
        name: 'App',
        data() {
            return {
                amount: 0,
            }
        },
        computed: {
            count() {
                return this.$store.getters.count;
            },
            getAmount() {
                return Number(this.amount) || 1;
            }
        },
        methods: {
            increment() {
                this.$store.dispatch(typesCount.INCREMENT, this.getAmount);
            },
            decrement() {
                this.$store.dispatch(typesCount.DECREMENT, this.getAmount);
            },
            reset() {
                this.$store.dispatch(typesCount.RESET);
            }
        },
    }
</script>

<style scoped>
</style>