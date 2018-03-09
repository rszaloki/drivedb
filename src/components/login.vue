<template>
  <button v-if="gapiLoaded && !isSignedIn" @click="signIn()" class="">Sign In</button>
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
      }
    },
    methods: {
      signIn () {
        this.$store.dispatch('signIn')
      }
    }
  }
</script>
