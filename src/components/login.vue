<template>
  <div v-if="gapiLoaded">
    <button v-if="!isSignedIn" @click="signIn()">Sign In</button>
    <button v-if="isSignedIn" @click="signOut()">Sign Out</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'drivedb-login',
    computed: {
      ...mapState(['gapiLoaded', 'isSignedIn'])
    },
    methods: {
      ...mapActions(['signIn', 'signOut']),
    },
  }
</script>

<style scoped>

</style>
