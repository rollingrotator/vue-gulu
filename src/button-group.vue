<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted(){
      for(let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(`你输入的不是一个button，而是${name}`)
        }
      }

    }
  }
</script>

<style lang="scss">
  .d-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .d-button{
      border-radius: 0;
      margin-left: -1px;

      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>