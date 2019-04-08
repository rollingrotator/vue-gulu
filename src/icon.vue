<template>
  <svg class="d-icon" aria-hidden="true" v-if="icon">
    <use :xlink:href=`#icon-${icon}`></use>
  </svg>
</template>

<script>
  export default {
    name: "d-icon",
    props:['name']
  }
</script>

<style lang="scss">
  .d-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>