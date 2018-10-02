<template>
    <div>
        <slot name="date"></slot>
        <h1>{{messageText}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            messageText: String
        }
    }
</script>

<style scoped>

</style>