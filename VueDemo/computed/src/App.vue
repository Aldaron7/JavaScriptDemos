<template>
    <div>
        <input type="number" v-model="id"/>
        <p>Name: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
        <p>Id: {{user.id}}</p>
        <counter/>
    </div>
</template>
<script>
    import axios from 'axios';
    import Counter from "./components/Counter";

    export default {
        name: 'App',
        components: {Counter},
        data() {
            return {
                id: '',
                user: {}
            }
        },
        methods: {
            getDataForUser() {
                axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                    .then(res => this.user = res.data);
            }
        },
        watch: {
            id() {
                this.getDataForUser();
            }
        }
    }
</script>
