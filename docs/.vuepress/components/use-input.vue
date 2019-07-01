<template>
  <div>
    <div class="margins">
      <HotsInput value="default" v-model="message"></HotsInput>
      <HotsInput disabled value="disabled"></HotsInput>
    </div>
    <div class="margins">
      <HotsInput readonly value="readonly"></HotsInput>
      <HotsInput error="pop error!"></HotsInput>
    </div>
  </div>
</template>

<script>
  import  HotsInput from '../../../src/input'
  export default {
    name: "use-input.vue",
    components:{HotsInput},
    data(){
      return {
        message: 'hi'
      }
    },
    methods: {
      inputChange (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
.margins{
  margin: 10px 0;
}
</style>