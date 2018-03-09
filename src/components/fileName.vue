<template>
  <h3 ref="title" @blur="endRename()" @click="startRename()">{{fileName}}</h3>
</template>

<script>
  export default {
    name: 'drivedb-file-name',
    computed: {
      fileName () {
        return this.$store.state.file && this.$store.state.file.name
      }
    },
    methods: {
      startRename() {
        const title = this.$refs.title;
        title.contentEditable = true;
        title.focus();
      },
      endRename() {
        const title = this.$refs.title;
        title.contentEditable = false;
        this.$store.dispatch('renameFile', title.innerText)
      }
    }
  }
</script>

<style scoped>

</style>
