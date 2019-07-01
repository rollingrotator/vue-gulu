<!--suppress XmlUnboundNsPrefix -->
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
    </div>
    <div>
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
        <HotsSlidesItem name="4">
          <div class="box">4</div>
        </HotsSlidesItem>
        <HotsSlidesItem name="5">
          <div class="box">5</div>
        </HotsSlidesItem>
      </HotsSlides>
    </div>
    <div>
      <!--popover-->
      <HotsPopover>
        <template>
          <button>点我</button>
        </template>
        <template slot="content">
          弹出内容
        </template>
      </HotsPopover>
    </div>
<!--    <div>
      &lt;!&ndash;nav&ndash;&gt;
        <HotsNav :selected.sync="selected">
          <HotsNavItem name="home">首页</HotsNavItem>
          <HotsSubNav name="about">
            <template slot="title">关于</template>
            <HotsNavItem name="culture">企业文化</HotsNavItem>
            <HotsNavItem name="developers">开发团队</HotsNavItem>
            <HotsSubNav name="contacts">
              <template slot="title">联系方式</template>
              <HotsNavItem name="wechat">微信</HotsNavItem>
              <HotsNavItem name="qq">QQ</HotsNavItem>
              <HotsSubNav name="phone">
                <template slot="title">手机</template>
                <HotsNavItem name="cm">移动</HotsNavItem>
                <HotsNavItem name="cu">联通</HotsNavItem>
                <HotsNavItem name="cn">电信</HotsNavItem>
              </HotsSubNav>
            </HotsSubNav>
          </HotsSubNav>
          <HotsNavItem name="hire">招聘</HotsNavItem>
        </Hotsnav>
        <p>你好，我是中文</p>
      </div>-->
    <div>
      <!--pages-->
      <HotsPages :totalPage="20"
      :currentPage.sync="currentPage"
      ></HotsPages>
    </div>

    <div>
      <div style="margin: 50px;width:500px">
        <HotsTable :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected4" :order-by.sync="orderBy"
                   @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
          <template slot-scope="xxx">
            <button @click="edit(xxx.item)">编辑</button>
            <button @click="view(xxx.item)">查看</button>
            <button>删除</button>
          </template>
        </HotsTable>
      </div>
    </div>

    <div>
      <HotsRow gutter="2" align="right">
        <HotsColumn style="background: red" span="12">123</HotsColumn>
        <HotsColumn span="12" >435</HotsColumn>
      </HotsRow>
    </div>

    <div>
      <HotsTabs :selected.sync="selectedTab" @update:selected="yyy">
        <HotsTabsHead>
          <HotsTabsItem name="woman">
            <HotsIcon name="setting"></HotsIcon>美女
          </HotsTabsItem>
          <HotsTabsItem name="finance">
            财经
          </HotsTabsItem>
          <HotsTabsItem name="sports">
            体育
          </HotsTabsItem>
        </HotsTabsHead>
        <HotsTabsBody>
          <HotsTabsPane name="woman">
            美女相关资讯
          </HotsTabsPane>
          <HotsTabsPane name="finance">
            财经相关资讯
          </HotsTabsPane>
          <HotsTabsPane name="sports">
            体育相关资讯
          </HotsTabsPane>
        </HotsTabsBody>
      </HotsTabs>
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
    HotsTable
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
      HotsTable
    },
    data() {
      return {
        a: false,
        selected: ['culture'],
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
            name: '江苏'
          }
        ],
        selected: [],
        selected2: '1',
        selected3: ['culture'],
        currentPage:10,
        currentPage4: 1,
        selected4: [],
        selectedTab: 'sports',
        columns: [
          {text: '姓名', field: 'name', width: 100}, // 1
          {text: '分数', field: 'score'},
        ],
        orderBy: { // true - 开启排序，但是不确定asc desc
          score: 'desc'
        },
        loading: false,
        dataSource: [
          {id: 1, name: '方方', score: 100, description: 'xxxx xxxx'},
          {id: 2, name: '圆圆', score: 99, description: 'yyyy yyyy'},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
          {id: 9, name: '方方', score: 100},
          {id: 10, name: '圆圆', score: 99},
          {id: 11, name: '张三', score: 100},
          {id: 12, name: '李四', score: 99},
          {id: 13, name: '超人', score: 100},
          {id: 14, name: '蝙蝠侠', score: 99},
          {id: 15, name: '蜘蛛侠', score: 100},
          {id: 16, name: '钢铁侠', score: 99},
          {id: 17, name: '蜘蛛侠', score: 100},
          {id: 18, name: '钢铁侠', score: 99},
          {id: 19, name: '方方', score: 100},
          {id: 20, name: '圆圆', score: 99},
        ]
      }
    },
    methods: {
      edit (item) {
        alert(`开始编辑${item.id}`)
      },
      view (item) {
        alert(`开始查看${item.id}`)
      },
      x () {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      },
      yyy(data){
        console.log('yyy')
        console.log(data)
      },
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