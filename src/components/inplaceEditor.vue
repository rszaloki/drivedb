<template>
  <span ref="editor" @blur="endEdit()" @click="startEdit()">{{value}}</span>
</template>

<script>
  export default {
    name: 'drivedb-inplace-editor',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: ['value'],
    methods: {
      startEdit() {
        const editor = this.$refs.editor;
        editor.contentEditable = true;
        editor.focus();
      },
      endEdit() {
        const editor = this.$refs.editor;
        editor.contentEditable = false;
        this.$emit('change', editor.innerText)
      }
    }
  }
</script>
