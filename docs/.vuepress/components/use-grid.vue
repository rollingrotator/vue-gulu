<template>
  <div>
    <Hotsrow gutter="20">
      <Hotscolumn style="background: red" span="12"></Hotscolumn>
      <Hotscolumn span="12" style="background: yellow"></Hotscolumn>
    </Hotsrow>
  </div>
</template>

<script>
  import Hotsrow from '../../../src/grid/row'
  import Hotscolumn from  '../../../src/grid/column'
  export default {
    name: "use-grid",
    components:{
      Hotsrow,
      Hotscolumn
    }
  }
</script>

<style >

</style>