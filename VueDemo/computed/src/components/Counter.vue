<template>
    <input type="number" v-model="count"/>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                count: 0
            }
        },
        watch: {
            count(newValue, oldValue) {
                alert(`Old count: ${oldValue}; new count: ${newValue}`);
            }
        },
    }
</script>

