<template>
  <div>
    <h-button :icon="'setting'">默认</h-button>
  </div>
</template>
<script>
  import HotsButton from '../../../src/button/button'
  export default {
    name:'use-button',
    components:{
      'h-button':HotsButton
    }
  }
</script>