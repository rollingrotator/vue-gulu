---
title:'tabs'
---


### 展示
<ClientOnly><use-tabs></use-tabs></ClientOnly>

### 可选参数






### 示例
```
   <div>
     <tabs :selected.sync="selectedTab" @update:selected="yyy">
       <tabs-head>
         <tabs-item name="woman">
           <HotsIcon name="setting"></HotsIcon>美女
         </tabs-item>
         <tabs-item name="finance">
           财经
         </tabs-item>
         <tabs-item name="sports">
           体育
         </tabs-item>
       </tabs-head>
       <tabs-body>
         <tabs-pane name="woman">
           美女相关资讯
         </tabs-pane>
         <tabs-pane name="finance">
           财经相关资讯
         </tabs-pane>
         <tabs-pane name="sports">
           体育相关资讯
         </tabs-pane>
       </tabs-body>
     </tabs>
   </div>
```
