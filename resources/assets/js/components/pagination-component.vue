<template>
  <div class="text-xs-left">
    <v-pagination :length="6" v-model="page"></v-pagination>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 1
      }
    }
  }
</script>