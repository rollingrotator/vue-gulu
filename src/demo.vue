<template>
  <div>
    <h-button>cao</h-button>
    <h-button-group> <h-button>nihao</h-button> <h-button>nihao</h-button></h-button-group>
    <h-button-group>
      <div>xx</div>
    </h-button-group>
  </div>

</template>

<script>
  import HotsButton from './button/button'
  import HotsButtonGroup from './button/button-group'

  export default {
    name: "demo",
    components: {
      'h-button': HotsButton,
      'h-button-group': HotsButtonGroup
    }
  }
</script>

<style scoped>

</style>