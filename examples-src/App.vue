<template>
  <div id="app" class="flex flex-wrap fixed absolute absolute--fill">
    <div :class="box_cls">
      <div :class="label_cls">Default spinner</div>
      <spinner></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Default spinner with message</div>
      <spinner message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Tiny Spinner</div>
      <spinner size="tiny" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Small Spinner</div>
      <spinner size="small" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Medium Spinner</div>
      <spinner size="medium" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Large Spinner</div>
      <spinner size="large" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Big Spinner</div>
      <spinner size="big" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Huge Spinner</div>
      <spinner size="huge" message="Loading..."></spinner>
    </div>
    <div :class="box_cls">
      <div :class="label_cls">Massive Spinner</div>
      <spinner size="massive" message="Loading..."></spinner>
    </div>
  </div>
</template>

<script>
  import Spinner from '../src/components/Spinner.vue'

  export default {
    name: 'app',
    components: {
      Spinner
    },
    computed: {
      box_cls() {
        return 'flex flex-column relative pa2 w-third justify-center br bb b--moon-gray'
      },
      label_cls() {
        return 'absolute top-0 left-0 pa2 f6 fw6 ttu dark-gray'
      }
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
    position: relative;
  }

  .b--moon-gray {
    border-color: #ccc;
  }
</style>
