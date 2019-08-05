<!--suppress XmlUnboundNsPrefix -->
<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <HotsUploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"
                :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <HotsButton icon="ow">上传</HotsButton>
    </HotsUploader>



    <div>
      <HotsSlides class="wrapper" width="300px" height="200px" :selected.sync="selected">
        <HotsSlidesItem name="1">
          <div class="box">1</div>
        </HotsSlidesItem>
        <HotsSlidesItem name="2">
          <div class="box">2</div>
        </HotsSlidesItem>
        <HotsSlidesItem name="3">
          <div class="box">3</div>
        </HotsSlidesItem>
      </HotsSlides>
    </div>
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
        fileList: [],
        selected: undefined
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