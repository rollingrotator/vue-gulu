---
title:'table'
---


### 展示
<ClientOnly><use-table></use-table></ClientOnly>

### 可选参数
+ 必选: columns/data-source
+ 可选: selected/orderBy/loading




### 注意 
请务必自行设置表头和列表的列宽,否则会出现样式问题.

### 示例
```
 <div class="element">
    <div style="margin: 20px;width:500px">
      <HotsTable :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
                 @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
        <template slot-scope="xxx">
          <button @click="edit(xxx.item)">编辑</button>
          <button @click="view(xxx.item)">查看</button>
        </template>
      </HotsTable>
    </div>
  </div>
```
