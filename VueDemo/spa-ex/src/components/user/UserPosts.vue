<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">{{post.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {API} from "../../utils/api";

    export default {
        name: "UserPosts",
        data() {
            return {
                posts: []
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                API.get(`posts?userId=${to.params.userId}`)
                    .then(res => vm.posts = res.data)
                    .catch(error => console.error(error))
            })
        }
    }
</script>

<style scoped>

</style>