<template>
  <div class="hots-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HotsButtonGroup",
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`你输入的不是一个button，而是${name}`)
        }
      }

    }
  }
</script>

<style lang="scss">
  @import "var";

  .hots-button-group {
    display: inline-flex;
    vertical-align: middle;
    &> .h-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>