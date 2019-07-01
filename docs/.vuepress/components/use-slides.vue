<template>
  <div>
    <HotsSlides class="wrapper" width="300px" height="200px" :selected.sync="selected">
      <HotsSlidesItem name="1">
        <div class="box">1</div>
      </HotsSlidesItem>
      <HotsSlidesItem name="2">
        <div class="box">2</div>
      </HotsSlidesItem>
      <HotsSlidesItem name="3">
        <div class="box">3</div>
      </HotsSlidesItem>
    </HotsSlides>
  </div>
</template>
<script>
  import HotsSlides from '../../../src/slides/slides'
  import HotsSlidesItem from '../../../src/slides/slides-item'
  export default {
    name: "use-slides",
    components: {HotsSlides, HotsSlidesItem},
    data () {
      return {
        selected: undefined
      };
    },
    created () {
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background:deepskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>