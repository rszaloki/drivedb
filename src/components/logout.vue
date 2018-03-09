<template>
  <button v-if="gapiLoaded && isSignedIn" @click="signOut()" class="button-outline">Sign Out</button>
</template>

<script>
  export default {
    name: 'drivedb-logout',
    computed: {
      gapiLoaded () {
        return this.$store.state.gapiLoaded
      },
      isSignedIn () {
        return this.$store.state.isSignedIn
      }
    },
    methods: {
      signOut () {
        this.$store.dispatch('signOut').then(() => this.$router.replace('/'))
      }
    },
    mounted: function () {
      if (!this.$store.state.isSignedIn) {
        this.$router.replace('/')
      } else {
        this.$store.watch(() => this.$store.state.isSignedIn, newValue => {
          if (!newValue) {
            this.$router.replace('/')
          }
        })
      }
    }

  }
</script>

<style scoped>

</style>
