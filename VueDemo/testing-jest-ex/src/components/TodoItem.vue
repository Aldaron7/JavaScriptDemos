<template>
    <li>{{todo.name}}</li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ['todo'],
    }
</script>

<style scoped>

</style>
