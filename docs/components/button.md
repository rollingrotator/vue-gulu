---
title:'button'
---


##  按钮
### 展示
<ClientOnly><use-button></use-button></ClientOnly>

### 可选参数
- icon:setting,left,right,up,down,hots
- loading:true/false
- iconPosition:left/right





### 示例
```
 <div>
    <h-button >默认</h-button>
    <h-button icon='setting'>设置</h-button>
    <h-button :loading="loading" @click="loading=!loading">点击切换状态</h-button>
    <h-button iconPosition='right' icon="shouwangxianfeng"
              :loading="loading2" @click="loading2=!loading2"
    >右侧图标</h-button>
  </div>
```
