<template>
    <div>
        <div v-if="showName" class="box">
            Name: Mark
        </div>
        <div v-for="(name, index) in names">
            <div>{{index}}: {{name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                showName: true,
                names: ['Peter Falk', 'Mary-Ann Blige', 'Eminem'],
            }
        },
    }
</script>

<style>
    div.box {
        width: 200px;
        padding: 20px;
        margin: 20px;
        border: 1px solid black;
        color: white;
        background-color: green
    }
</style>
