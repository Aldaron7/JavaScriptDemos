<template>
    <div>
        <span v-for="message in messages" :key="message.id">
            <strong>{{message.username}}: </strong> {{message.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "MessageList",
        props: {
            messages: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
    div {
        overflow: auto;
        height: 150px;
        margin: 10px auto 10px auto;
        padding: 5px;
        border: 1px solid gray;
    }

    span {
        display: block;
        padding: 2px;
    }
</style>