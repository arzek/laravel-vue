<template>
    <h1>{{ message }}</h1>
</template>

<script>
    export default {
        data: function () {
            return {
                message: "Кирил Привіт!!!"
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
