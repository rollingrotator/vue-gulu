<template>
  <div>
    <!--pages-->
    <HotsPages :totalPage="totalPage"
               :currentPage.sync="currentPage"
    ></HotsPages>
  </div>
</template>

<script>
  import HotsPages from '../../../src/pages'
  export default {
    name: "use-pages",
    components:{HotsPages},
    data(){
      return {
        currentPage:10,
        totalPage:20
      }
    }
  }
</script>

<style scoped>

</style>