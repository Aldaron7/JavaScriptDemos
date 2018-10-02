<template>
    <div class="container">
        <div class="user">
            <div class="user__name">
                <h1>{{userInfo.name}}</h1>
                <p>Person ID {{$route.params.userId}}</p>
                <p>Username: {{userInfo.username}}</p>
                <p>Email: {{userInfo.email}}</p>
            </div>
            <div class="user__address" v-if="userInfo && userInfo.address">
                <h1>Address</h1>
                <p>Street: {{userInfo.address.street}}</p>
                <p>Suite: {{userInfo.address.suite}}</p>
                <p>City: {{userInfo.address.city}}</p>
                <p>Zipcode: {{userInfo.address.zipcode}}</p>
                <p>Lat: {{userInfo.address.geo.lat}} Lng:
                    {{userInfo.address.geo.lng}} </p>
            </div>
            <div class="user__other">
                <h1>Other</h1>
                <p>Phone: {{userInfo.phone}}</p>
                <p>Website: {{userInfo.website}}</p>
                <p v-if="userInfo && userInfo.company">Company:
                    {{userInfo.company.name}}</p>
            </div>
        </div>
        <div class="posts">
            <h1>Posts</h1>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {API} from "../../utils/api";

    export default {
        name: "UserDetail",
        data() {
            return {
                userInfo: {},
            }
        },
        beforeRouteEnter(to, from, next) {
            API.get(`users/${to.params.userId}`)
                .then(res => next(vm => vm.userInfo = res.data))
                .catch(error => console.error(error));

        }
    }
</script>

<style scoped>
    .container {
        line-height: 2.5em;
        text-align: center;
    }

    .user {
        display: inline-block;
        width: 49%;
    }

    .posts {
        vertical-align: top;
        display: inline-block;
        width: 49%;
    }

    ul {
        list-style-type: none;
    }
</style>