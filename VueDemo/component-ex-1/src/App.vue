<template>
    <div>
        <fancy-button @buttonClicked="eventListener($event)" button-text="Hello World as Props!"/>
        <br/>
        <button>Another Button</button>
        <parent/>
    </div>
</template>

<script>
    import FancyButton from "./components/FancyButton";
    import Parent from "./components/Parent";

    export default {
        name: 'App',
        components: {
            Parent,
            FancyButton
        },
        methods: {
            eventListener(message) {
                console.log(`The button was clicked from the child component with the message: ${message}!`);
            }
        },
    }
</script>

<style>

</style>
