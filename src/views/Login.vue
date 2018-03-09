<template>
  <main>
    <drivedb-login></drivedb-login>
  </main>
</template>

<script>
  import DrivedbLogin from 'src/components/login'

  export default {
    components: {DrivedbLogin},
    name: 'login',
    mounted: function () {
      if (this.$store.state.isSignedIn) {
        this.$router.replace('/')
      } else {
        this.$store.watch(() => this.$store.state.isSignedIn, newValue => {
          if (newValue) {
            this.$router.replace('/')
          }
        })
      }
    }

  }
</script>

<style scoped>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
