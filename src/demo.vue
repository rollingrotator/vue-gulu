<template>
  <div>
    <Hots-button>xx</Hots-button>
    <Hots-button :iconPosition="'right'"
                 :icon="'setting'"
    >xx
    </Hots-button>
    <Hots-button :iconPosition="'left'"
                 :loading="a"
                 @click="a=!a"
    >yy
    </Hots-button>
    <div>
      <HotsButtonGroup>
        <HotsButton>prev</HotsButton>
        <HotsButton>next</HotsButton>
      </HotsButtonGroup>
    </div>

    <Hots-cascader>
      <HotsCascaderItems></HotsCascaderItems>
    </Hots-cascader>
  </div>

</template>

<script>
  import {
    HotsButton, HotsButtonGroup,
    HotsCascader, HotsCascaderItems,
    HotsCollapse, HotsCollapseItem,
    HotsColumn, HotsRow,
    HotsContent, HotsFooter, HotsHeader, HotsLayout, HotsSider,
    HotsNav, HotsNavItem, HotsSubNav,
    HotsSlides, HotsSlidesItem,
    HotsTabsHead, HotsTabsItem, HotsTabsBody, HotsTabsPane, HotsTabs,
    HotsIcon,
    HotsInput,
    HotsPages,
    HotsPopover,
    HotsToast
  } from './components'

  export default {
    name: "demo",
    components: {
      HotsButton, HotsButtonGroup,
      HotsCascader, HotsCascaderItems,
      HotsCollapse, HotsCollapseItem,
      HotsColumn, HotsRow,
      HotsContent, HotsFooter, HotsHeader, HotsLayout, HotsSider,
      HotsNav, HotsNavItem, HotsSubNav,
      HotsSlides, HotsSlidesItem,
      HotsTabsHead, HotsTabsItem, HotsTabsBody, HotsTabsPane, HotsTabs,
      HotsIcon,
      HotsInput,
      HotsPages,
      HotsPopover,
      HotsToast
    },
    data(){
      return{
        a:false
      }
    },
    methods:{
      xx(e){
        console.log(e);
      }
    }
  }
</script>

<style scoped>

</style>