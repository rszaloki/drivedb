<template>
  <main class="home">
    <drivedb-object-list :data="people">
      <drivedb-people slot="item" slot-scope="{ item }"
                      :id="item.id"
                      :name="item.name"
                      :title="item.title"
                      :created="item.created"></drivedb-people>
    </drivedb-object-list>
  </main>
</template>

<script>

  import DrivedbObjectList from 'src/components/objectList'
  import DrivedbPeople from 'src/components/people'

  export default {
    components: {
      DrivedbPeople,
      DrivedbObjectList
    },
    name: 'home',
    computed: {
      people () {
        return this.$store.getters.people
      }
    }
  }
</script>
