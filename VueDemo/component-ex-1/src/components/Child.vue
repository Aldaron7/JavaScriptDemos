<template>
    <h1 @click="onClicked">Welcome to {{appTitle}}</h1>
</template>

<script>
    export default {
        name: "Child",
        props: {
            appTitle: {
                type: String,
                required: true,
            }
        },
        methods: {
            onClicked() {
                this.$emit('clickTitle', this.appTitle);
            }
        },
    }
</script>

<style scoped>

</style>
