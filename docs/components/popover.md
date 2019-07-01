---
title:'popover'
---


### 展示
<ClientOnly><use-popover></use-popover></ClientOnly>

### 可选参数

selectedTab/trigger/position




### 示例
```
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
```
