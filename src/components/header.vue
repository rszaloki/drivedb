<template>
  <header><div><slot></slot></div><x-login></x-login></header>
</template>

<script>
  import XLogin from './login'

  export default {
    components: {XLogin},
    name: 'x-header',
  }
</script>

<style scoped>
  header {
    display:flex;
    justify-items: flex-end;
  }
</style>