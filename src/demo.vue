<!--suppress XmlUnboundNsPrefix -->
<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <HotsUploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <HotsButton icon="ow">上传</HotsButton>
    </HotsUploader>
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
    HotsToast,
    HotsTable,
    HotsUploader
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
      HotsToast,
      HotsTable,
      HotsUploader
    },
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      parseResponse(response){
        let url = `http://127.0.0.1:3000/preview/${response}`
        return url
      },
      yyy (fileList) {
        console.log(fileList);
      }
    }
  }
</script>

<style  lang="scss">
  .box {
    height: 300px;
    background: blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>