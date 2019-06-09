<template>
  <div>
    <Hots-button>xx</Hots-button>
    <Hots-button :iconPosition="'right'"
    :loading="true">xx</Hots-button>
    <Hots-button :iconPosition="'left'"
                 :loading="true">xx</Hots-button>
    <HotsButtonGroup><HotsButton>1</HotsButton><HotsButton>2</HotsButton></HotsButtonGroup>
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
    }
  }
</script>

<style scoped>

</style>