---
title:'cascader'
---


### 展示
<ClientOnly><use-cascader></use-cascader></ClientOnly>

### 可选参数


z-index 值默认为3,如有需要请自行更改.



### 示例
```
  <div>
     <Hotstable class="wrapper" width="300px" height="200px" :selected.sync="selected">
       <HotstableItem name="1">
         <div class="box">1</div>
       </HotstableItem>
       <HotstableItem name="2">
         <div class="box">2</div>
       </HotstableItem>
       <HotstableItem name="3">
         <div class="box">3</div>
       </HotstableItem>
     </Hotstable>
   </div>
```
