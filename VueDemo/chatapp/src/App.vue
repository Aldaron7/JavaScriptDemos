<template>
    <div>
        <navigation-bar/>
        <div class="container">
            <message-list v-bind:messages="messages"/>
            <message-form/>
        </div>
        <connection-status :is-connected="isConnected"/>
    </div>
</template>

<script>
    import MessageList from "./components/MessageList";
    import MessageForm from "./components/MessageForm";

    export default {
        name: 'App',
        data() {
            return {
                isConnected: false,
                messages: [
                    {
                        id: 1,
                        username: 'Paul',
                        text: 'Hey!'
                    },
                    {
                        id: 2,
                        username: 'Evan',
                        text: 'How are you?'
                    },
                ]
            }
        },
        components: {
            MessageList,
            MessageForm,
        },
        sockets: {
            connect() {
                this.isConnected = true;
            },
            disconnect() {
                this.isConnected = false;
            },
            chatMessage(messages) {
                this.messages = messages;
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 300px;
        margin: 0 auto;
    }
</style>