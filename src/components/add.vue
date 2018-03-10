<template>
    <button @click="add">+</button>
</template>

<script>
  export default {
    name: 'drivedb-add',
    methods:{
      add() {
        this.$store.dispatch('createNewItem')
      }
    }
  }
</script>

<style scoped>

</style>
