<template>
  <main class="empty">
    <div>
      <button class="pure-button pure-button-primary" @click="createNew()">create a new</button>
      or
      <button class="pure-button pure-button-secondary">Pick an existing</button>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'empty',
    methods: {
      createNew() {
        this.$store.dispatch('initDoc')
        this.$store.dispatch('initFile')
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
  .empty {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
