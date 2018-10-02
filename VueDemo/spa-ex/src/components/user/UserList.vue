<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            <router-link v-bind:to="{path: `/${user.id}`}">
                {{user.name}}
            </router-link>
        </li>
    </ul>
</template>

<script>
    import {API} from "../../utils/api";


    export default {
        name: "UserList",
        data() {
            return {
                users: []
            }
        },
        beforeRouteEnter(to, from, next) {
            API.get('users')
                .then(res => next(vm => vm.users = res.data))
                .catch(error => next(error))
        }
    }
</script>

<style scoped>

</style>