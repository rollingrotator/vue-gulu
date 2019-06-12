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

    <!--buttonGroup-->
    <!--输入的必须是button否则警告-->
    <div>
      <HotsButtonGroup>
        <HotsButton icon="left">prev</HotsButton>
        <HotsButton>current</HotsButton>
        <HotsButton icon="right" iconPosition="right">next</HotsButton>
      </HotsButtonGroup>
    </div>

    <!--input-->
    <div>
      <HotsInput value="default" v-model="message"></HotsInput>
      <HotsInput disabled value="disabled"></HotsInput>
      <HotsInput readonly value="readonly"></HotsInput>
      <HotsInput error="pop error!"></HotsInput>
    </div>

    <!--cascader-->
    <div>
      <HotsCascader :source="source"
                    popoverHeight="300px"
                    :selected.sync='selected'
      >
        <!--:selected="selected"@update:selected="selected = $event"-->
      </HotsCascader>
      <div>{{selected}}</div>
    </div>
    
    <!--slider-->
    <HotsSlides :selected.sync="selected2">
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
  import db from '../tests/fixtures/db'

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
    data() {
      return {
        a: false,
        message: 'default',
        source: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {
                    name: '上城区'
                  },
                  {
                    name: '下城区'
                  },

                ]
              },
              {
                name: '河南',
                children: [
                  {
                    name: '安阳',
                    children: [
                      {
                        name: '北关区'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name:'江苏'
          }
        ],
        selected: [],


        selected2:'1'
      }
    },
    methods: {}
  }
</script>

<style scoped>
 .box{
  height: 300px;
  background: blue;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>