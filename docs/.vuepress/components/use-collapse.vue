<template>
  <div  style="padding: 100px;">
    {{selectedTab}}
    <HotsCollapse :selected.sync="selectedTab">
      <HotsCollapseItem title="标题1" name="1">内容1</HotsCollapseItem>
      <HotsCollapseItem title="标题2" name="2">内容2</HotsCollapseItem>
      <HotsCollapseItem title="标题3" name="3">内容3</HotsCollapseItem>
    </HotsCollapse>
  </div>
</template>

<script>
  import HotsCollapse from '../../../src/collapse/collapse'
  import HotsCollapseItem from '../../../src/collapse/collapseItem'
  export default {
    name: "use-collapse",
    components:{
      HotsCollapse,HotsCollapseItem
    },
    data(){
      return{
        selectedTab: ['2','3']
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>