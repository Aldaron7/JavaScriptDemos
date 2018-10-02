<template>
    <form @submit.prevent="sendMessage">
        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" v-model="username"/>
        </div>
        <div>
            <label for="text">Message</label>
            <textarea name="text" v-model="text"></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<script>
    export default {
        name: "MessageForm",
        data() {
            return {
                username: '',
                text: '',
            }
        },
        methods: {
            sendMessage() {
                this.$socket.emit('chatMessage', {
                    username: this.username,
                    text: this.text,
                })

            }
        },
    }
</script>

<style scoped>
    input,
    textarea {
        margin: 5px;
        width: 100%;
    }
</style>