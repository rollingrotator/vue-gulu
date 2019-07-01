---
title:'collapse'
---


### 展示
<ClientOnly><use-collapse></use-collapse></ClientOnly>

### 可选参数


selectedTab 接收一个数组用来展示默认展开数据.



### 示例
```
  <div  style="padding: 100px;">
    <HotsCollapse :selected.sync="selectedTab">
      <HotsCollapseItem title="标题1" name="1">内容1</HotsCollapseItem>
      <HotsCollapseItem title="标题2" name="2">内容2</HotsCollapseItem>
      <HotsCollapseItem title="标题3" name="3">内容3</HotsCollapseItem>
    </HotsCollapse>
    {{selectedTab}}

  </div>
```
