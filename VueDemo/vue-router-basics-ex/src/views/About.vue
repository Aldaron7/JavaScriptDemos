<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>Route Param {{$route.params.name}}</h2>
        <h2>Props {{name}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: {
            name: {
                type: String
            }
        },
        created() {
            console.log(`Hello ${this.name}`);
        },
        beforeRouteUpdate(to, from, next) {
            console.log(to);
            console.log(from);
            console.log(`Hello to you ${to.params.name}`);
            next();
        },
        beforeRouteEnter(to, from, next) {
            console.log(`Called from before entering the route!`);
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log(`Called before leaving the route!`);
            console.log(`I have access to the component instance, here's proof! Name: ${this.name}\``);
            next();
        }
    }
</script>
