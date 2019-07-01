---
title:'pages'
---


### 展示
<ClientOnly><use-pages></use-pages></ClientOnly>




### 示例
```
  <div>
      <HotsPages :totalPage="totalPage"
                  :currentPage.sync="currentPage"
       ></HotsPages>
  </div>
  
  
 
```

### 参数
          currentPage/totalPage
### 注意事项

由于未知原因,此展示页面中上一页/下一页按钮只能点击到有箭头的区域

