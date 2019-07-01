<template>
  <div>
    <div style="overflow: hidden; padding-top: 150px; padding-bottom: 40px;">
      <HotsPopover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>文字</div>
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
          <button @click="close">关闭</button>
        </template>
        <button>click</button>
      </HotsPopover>
      <HotsPopover position="top">
        <template slot="content">
          <div>popover内容
            <button>关闭</button>
          </div>
        </template>
        <button>click</button>
      </HotsPopover>
      <HotsPopover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>click</button>
      </HotsPopover>
      <HotsPopover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>click</button>
      </HotsPopover>
    </div>
    <div style="overflow: hidden; padding-bottom: 150px;">
      <HotsPopover position="bottom" trigger="hover">
        <template slot="content">
          <div>askddjk</div>
          <div>askdjsakdjsadladjk</div>
        </template>
        <button>hover</button>
      </HotsPopover>
      <HotsPopover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>hover</button>
      </HotsPopover>
      <HotsPopover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>hover</button>
      </HotsPopover>
      <HotsPopover position="right" trigger="hover">
        <template slot="content">
          <div>popover <a href="http://qq.com">看新网</a> 内容</div>
        </template>
        <button>hover</button>
      </HotsPopover>
    </div>
  </div>

</template>

<script>
  import HotsPopover from '../../../src/popover'
  export default {
    name: "use-popover",
    components:{
      HotsPopover
    },
    data() {
      return {
        selectedTab: 'sports'
      }
    },
    methods: {
      yyy() {
        console.log('yyy')
      },
      showToast1() {
        this.showToast('top')
      },
      showToast2() {
        this.showToast('middle')
      },
      showToast3() {
        this.showToast('bottom')
      },
      showToast(position) {
        this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
          position,
          enableHtml: false,
          closeButton: {
            text: '已充值',
            callback() {
              console.log('他说已经充值智商了')
            }
          },
          autoClose: 3,
        })
      }
    }
  }
</script>

<style scoped>

</style>