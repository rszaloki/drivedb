<template>
  <header>
    <nav>
      <slot></slot>
    </nav>
    <drivedb-logout></drivedb-logout>
  </header>
</template>

<script>

  import DrivedbLogout from 'src/components/logout'

  export default {
    components: {
      DrivedbLogout,
    },
    name: 'drivedb-header',
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-items: flex-end;
    align-items: center;
  }

  nav {
    flex: 1;
  }
</style>
