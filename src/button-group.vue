<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group"
  }
</script>

<style lang="scss">
  .d-button-group{
    display: inline-flex;
    vertical-align: middle;
  }
</style>