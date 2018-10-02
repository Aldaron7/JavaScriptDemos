<template>
    <div>
        <shopping-input/>
        <shopping-list v-bind:shopping-list="shoppingList"/>
        <button @click="stopListening()">Stop Listening</button>
    </div>
</template>

<script>
    import ShoppingList from "./components/ShoppingList";
    import ShoppingInput from "./components/ShoppingInput";
    import EventBus from "./EventBus";


    export default {
        components: {ShoppingInput, ShoppingList},
        data() {
            return {
                shoppingList: []
            }
        },
        created() {
            EventBus.$on('addShoppingItem', name => this.shoppingList.push(name));
        },
        methods: {
            stopListening() {
                EventBus.$off('addShoppingItem');
            }
        },
    }
</script>

<style scoped>

</style>