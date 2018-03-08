<template>
  <div v-if="gapiLoaded">
    <button v-if="!isSignedIn" @click="signIn()">Sign In</button>
    <button v-if="isSignedIn" @click="signOut()">Sign Out</button>
  </div>
</template>

<script>
  export default {
    name: 'drivedb-login',
    computed: {
      gapiLoaded () {
        return this.$store.state.gapiLoaded
      },
      isSignedIn () {
        return this.$store.state.isSignedIn
      },
    },
    methods: {
      signIn () {
        this.$store.actions.signIn()
      },
      signOut () {
        this.$store.actions.signOut()
      }
    },
  }
</script>

<style scoped>

</style>
