<template>
  <h3>
    <drivedb-inplace-editor v-model="fileName"></drivedb-inplace-editor>
  </h3>
</template>

<script>
  import DrivedbInplaceEditor from 'src/components/inplaceEditor'

  export default {
    components: {DrivedbInplaceEditor},
    name: 'drivedb-file-name',
    computed: {
      fileName: {
        get: function () {
          return this.$store.state.file && this.$store.state.file.name
        },
        set: function (newVal) {
          this.$store.dispatch('renameFile', newVal)
        }
      }
    }
  }
</script>

<style scoped>

</style>
