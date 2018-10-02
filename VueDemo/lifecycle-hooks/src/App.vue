<template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld :msg=msg />
        <button @click="msg = 'Updated in App'">Update Message in App</button>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Lifecycle Hooks App'
            }
        },
        components: {
            HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 10px;
    }
</style>
