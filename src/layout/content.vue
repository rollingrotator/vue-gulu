<template>
  <div class="hots-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'HotsContent'
  }
</script>

<style lang="scss" scoped>
  .hots-content {
    flex-grow: 1;
  }
</style>