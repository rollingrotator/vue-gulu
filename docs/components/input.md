---
title:'input'
---


### 展示
<ClientOnly><use-input></use-input></ClientOnly>

### 可选参数

disabled/readonly/error/value




### 示例
```
  <div>
    <div>
      <HotsInput value="default" v-model="message"></HotsInput>
      <HotsInput disabled value="disabled"></HotsInput>
    </div>
    <div>
      <HotsInput readonly value="readonly"></HotsInput>
      <HotsInput error="pop error!"></HotsInput>
    </div>
  </div>
```
