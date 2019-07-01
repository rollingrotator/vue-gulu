---
title:'cascader'
---


### 展示
<ClientOnly><use-cascader></use-cascader></ClientOnly>

### 可选参数
+ selected/source
+ 可接收异步数据.
### 注意
+ z-index 值默认为3,如有需要请自行更改.
+ 本示例展示异步接收数据并展示


### 示例
```
 <div >
    <div style="padding: 20px;z-index:10">
      <h-cascader :source.sync="source" popover-height="200px"
                  :selected.sync="selected" :load-data="loadData"></h-cascader>
    </div>
  </div>
```
