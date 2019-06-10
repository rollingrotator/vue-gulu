<template>
  <svg class="hots-icon" aria-hidden="true" @click="$emit('click', $event)" >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    name: "HotsIcon",
    props:['name']
  }
</script>

<style lang="scss">
  .hots-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
