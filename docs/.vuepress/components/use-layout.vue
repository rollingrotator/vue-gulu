<template>
  <div class="container">
    <HotsLayout style="height: 100vh;">
      <HotsSider>sider</HotsSider>
      <HotsLayout>
        <HotsHeader>header</HotsHeader>
        <HotsContent>content</HotsContent>
        <HotsFooter>footer</HotsFooter>
      </HotsLayout>
    </HotsLayout>
  </div>
</template>

<script>
  import HotsContent from '../../../src/layout/content'
  import HotsFooter from '../../../src/layout/footer'
  import HotsHeader from '../../../src/layout/header'
  import HotsLayout from '../../../src/layout/layout'
  import HotsSider from '../../../src/layout/sider'
  export default {
    name: "layout",
    components:{
      HotsContent,
      HotsFooter,
      HotsHeader,
      HotsLayout,
      HotsSider,
    }
  }
</script>

<style scoped>
  .demo {
    border: 1px solid #666;
    min-height: 100px;
  }
  .sider {
    background: #333;
    width: 150px;
  }
  .sider.slide-enter, .sider.slide-leave-to {
    margin-left: -150px;
  }
  .header {
    background: #999;
    height: 100px;
  }
  .footer {
    background: #ccc;
    height: 50px;
  }
  .container{
    border : 1px solid cornflowerblue;
  }
</style>