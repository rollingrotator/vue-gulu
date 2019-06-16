<template>
  <div>
    <HotsInput v-model="message"></HotsInput>
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

</style>