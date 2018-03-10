<template>
  <li class="people">
    <drivedb-inplace-editor v-model="myName" class="name"></drivedb-inplace-editor>
    <drivedb-inplace-editor v-model="myTitle" class="title"></drivedb-inplace-editor>
    <div class="editor">{{created}}</div>
  </li>
</template>

<script>
  import DrivedbInplaceEditor from 'src/components/inplaceEditor'

  export default {
    components: {DrivedbInplaceEditor},
    name: 'drivedb-people',
    props: ['id', 'name', 'title', 'created'],
    data: function () {
      return {
        myName: this.name,
        myTitle: this.title
      }
    },
    watch: {
      'myName': function (newVal) {
        this.changeHandler(newVal, 'name')
      },
      'myTitle': function (newVal) {
        this.changeHandler(newVal, 'title')
      }
    },
    methods: {
      changeHandler (newVal, type) {
        const newDoc = Object.assign({
          id: this.id,
          created: this.created
        }, {[type]: newVal})

        this.$store.dispatch('updateItem', newDoc);
      }
    }
  }
</script>

<style scoped>
  li.people {
    display: grid;
    grid-template-rows: [start] 3em [title-end] 1.5em [end];
    grid-template-columns: [start] 75fr [editor-start] 25fr [end];
  }

  li.people .name {
    grid-column: start / end;
    grid-row: start / title-end;
    font-size: 2em;
  }

  li.people .title {
    grid-column: start / editor-start;
    grid-row: title-end / end;
  }

  li.people .editor {
    grid-column: editor-start / end;
    grid-row: title-end / end;
  }

</style>
