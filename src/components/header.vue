<template>
  <header>
    <nav>
      <slot></slot>
    </nav>
    <drivedb-login></drivedb-login>
  </header>
</template>

<script>

  import DrivedbLogin from 'src/components/login'

  export default {
    components: {
      DrivedbLogin,
    },
    name: 'drivedb-header',
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-items: flex-end;
  }

  nav {
    flex: 1;
  }


</style>
