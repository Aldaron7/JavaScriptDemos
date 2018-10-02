<template>
    <child :app-title="'My App'" @clickTitle="onTitleClicked($event)"/>
</template>

<script>
    import Child from "./Child";
    export default {
        name: "Parent",
        components: {Child},
        methods: {
            onTitleClicked(title) {
                alert(`Title clicked: ${title}`)
            }
        },
    }
</script>

<style scoped>

</style>
