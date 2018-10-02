<template>
    <div>
        <span v-if="isConnected" class="bar connected">Connected to the server</span>
        <span v-else class="bar disconnected">Disconnected from the server</span>
    </div>
</template>

<script>
    export default {
        name: "ConnectionStatus",
        props: {
            isConnected: {
                type: Boolean,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 5px;
    }

    .connected {
        background: greenyellow;
        color: black;
    }

    .disconnected {
        background: red;
        color: white;
    }
</style>