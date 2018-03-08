<template>
  <div id="app">
    <drivedb-header>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </drivedb-header>
    <router-view/>
  </div>
</template>
<script>

  import DrivedbHeader from 'components/header'

  export default {
    components: {DrivedbHeader},
    name: 'App',
  }
</script>
<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
