<template>
  <ul>
    <slot name="item" v-for="item in items" :item="item"></slot>
  </ul>
</template>

<script>
  export default {
    name: 'drivedb-object-list',
    props: ['data', 'sortkey'],
    computed: {
      items () {
        const keys = Object.keys(this.data).filter(key => key !== '_objectId')
        return keys.map(current => this.data[current])
      }
    }
  }
</script>

<style scoped>

</style>
