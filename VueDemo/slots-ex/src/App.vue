<template>
    <div id="app">
        <input type="text" v-model="message"/>
        <button @click="sendMessage()">+</button>

        <message v-for="(message, index) in messageList" v-bind:message-text="message.text" :key="index">
            <h2 slot="date">{{message.date | date}}</h2>
        </message>
    </div>
</template>

<script>
    import Message from "./components/Message";
    import moment from "moment";

    const convertDateToString = value => moment(String(value)).format('dd DD.MM.YYYY');

    export default {
        name: 'App',
        components: {Message},
        data() {
            return {
                message: '',
                messageList: [],
            }
        },
        methods: {
            sendMessage() {
                if (this.message.length > 0) {
                    this.messageList.push({date: new Date().toISOString(), text: this.message});
                    this.message = '';
                }
            }
        },
        filters: {
            date: function (value) {
                return convertDateToString(value);
            }
        }
    }
</script>

<style scoped>

</style>