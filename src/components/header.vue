<template>
  <header>
    <drivedb-file-name></drivedb-file-name>
    <drivedb-add v-if="hasDoc"></drivedb-add>
    <drivedb-logout v-if="hasUser"></drivedb-logout>
  </header>
</template>

<script>

  import DrivedbLogout from 'src/components/logout'
  import DrivedbFileName from 'src/components/fileName'
  import DrivedbAdd from 'src/components/add'

  export default {
    components: {
      DrivedbAdd,
      DrivedbFileName,
      DrivedbLogout
    },
    name: 'drivedb-header',
    computed: {
      hasDoc () {
        return !!this.$store.state.doc
      },
      hasUser () {
        return !!this.$store.state.gapiLoaded && !!this.$store.state.isSignedIn
      }
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
  }
</style>
