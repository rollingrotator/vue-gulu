<template>
  <div class="container">
    <tabs :selected.sync="selectedTab" @update:selected="yyy">
      <tabs-head>
        <tabs-item name="woman">
          <HotsIcon name="setting"></HotsIcon>美女
        </tabs-item>
        <tabs-item name="finance">
          财经
        </tabs-item>
        <tabs-item name="sports">
          体育
        </tabs-item>
      </tabs-head>
      <tabs-body>
        <tabs-pane name="woman">
          balabalabala
        </tabs-pane>
        <tabs-pane name="finance">
          财经相关资讯
        </tabs-pane>
        <tabs-pane name="sports">
          体育相关资讯
        </tabs-pane>
      </tabs-body>
    </tabs>
  </div>
</template>

<script>
  import tabs from '../../../src/tabs/tabs'
  import tabsHead from '../../../src/tabs/tabs-head'
  import tabsBody from '../../../src/tabs/tabs-body'
  import tabsItem from '../../../src/tabs/tabs-item'
  import tabsPane from '../../../src/tabs/tabs-pane'
  import HotsIcon from '../../../src/icon'
  export default {
    name: "use-tabs",
    components:{
      tabsHead,tabsBody,tabsItem,tabsPane,tabs,HotsIcon
    },
    data(){
      return {
        selectedTab: 'sports'
      }
    },
    methods:{
      yyy(data){
        console.log('yyy')
        console.log(data)
      },
    }
  }
</script>

<style scoped>
  .container{
    border:1px solid deepskyblue;
  }
</style>