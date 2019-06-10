<template>
  <div>
    <h-button >默认</h-button>
    <h-button icon="setting">设置</h-button>
    <h-button :loading="loading" @click="loading=!loading">点击切换状态</h-button>
    <h-button iconPosition='right' :icon="'shouwangxianfeng'"
              :loading="loading2" @click="loading2=!loading2"
    >右侧图标</h-button>
  </div>
</template>
<script>
  import HotsButton from '../../../src/button/button'
  export default {
    name:'use-button',
    components:{
      'h-button':HotsButton
    },
    data(){
      return {
        loading:true,
        loading2:false
      }
    }
  }
</script>