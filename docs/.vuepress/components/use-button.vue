<template>
  <div>
    <HotsButton >默认</HotsButton>
    <HotsButton icon="setting">设置</HotsButton>
    <HotsButton :loading="loading" @click="loading=!loading">点击切换状态</HotsButton>
    <HotsButton iconPosition='right' :icon="'shouwangxianfeng'"
              :loading="loading2" @click="loading2=!loading2"
    >右侧图标</HotsButton>
    <div> &nbsp;</div>
    <div>
      <HotsButtonGroup>
        <HotsButton icon="left">prev</HotsButton>
        <HotsButton>current</HotsButton>
        <HotsButton icon="right" iconPosition="right">next</HotsButton>
      </HotsButtonGroup>
    </div>
  </div>
</template>
<script>
  import HotsButton from '../../../src/button/button'
  import HotsButtonGroup from  '../../../src/button/button-group'
  export default {
    name:'use-button',
    components:{
      HotsButton,
      HotsButtonGroup
    },
    data(){
      return {
        loading:true,
        loading2:false
      }
    }
  }
</script>