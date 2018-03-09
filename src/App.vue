<template>
  <div id="app">
    <drivedb-header v-if="gapiLoaded"></drivedb-header>
    <router-view/>
  </div>
</template>
<script>
  import DrivedbHeader from 'src/components/header'

  export default {
    components: {DrivedbHeader},
    name: 'App',
    computed: {
      gapiLoaded () {
        return this.$store.state.gapiLoaded
      }
    }
  }
</script>
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12px;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    color: #222222;
  }

  #app {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template-rows: [start] 80px [header-end] auto [end];
    grid-template-columns: [start] auto [end];
    background: whitesmoke;
  }

  header {
    grid-row: start / header-end;
    grid-column: start / end;
  }

  main {
    grid-row: header-end / end;
    grid-column: start / end;
  }

  main.fullscreen {
    grid-row: start / end;
  }

  header, main {
    padding: 0 20px;
  }

  button, .button {
    margin-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: auto;
    letter-spacing: 0;
  }
</style>
