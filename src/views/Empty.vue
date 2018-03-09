<template>
  <main class="empty">
    <div>
      <button class="pure-button pure-button-primary">create a new</button>
      or
      <button class="pure-button pure-button-secondary">Pick an existing</button>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'empty'
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
