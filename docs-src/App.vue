<template>
  <div id="app" class="flex flex-row fixed absolute--fill overflow-hidden">
    Docs go here...
  </div>
</template>

<script>
  import Spinner from '../src/components/Spinner.vue'

  export default {
    name: 'app',
    components: {
      Spinner
    }
  }
</script>

<style>
  html, body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 100%;
  }

  html {
    height:100%;
  }

  body {
    min-height: 100%;
    overflow: hidden;
  }
</style>
