<template>
  <div>
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
  </div>
</template>

<script>
  import toast from '../../../src/toast'
  import plugin from '../../../src/plugin'
  import  Vue from 'vue'
  Vue.use(plugin)
  export default {
    name: "use-toast",
    components:{
      toast
    },
    data(){
      return {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
      }
    } ,
    created(){
    },
    methods: {
      showToast1(){
        this.showToast('top')
      },
      showToast2(){
        this.showToast('middle')
      },
      showToast3(){
        this.showToast('bottom')
      },
      showToast(position){
        this.$toast(`恭喜你,中了\$ ${parseInt(Math.random() * 12345)}元！`, {
          position,
          enableHtml: false,
          closeButton: {
            text: '关闭',
            callback () {
              console.log('调用了')
            }
          },
          autoClose: 3,
        })
      }
    }
  }
</script>

<style scoped>

</style>