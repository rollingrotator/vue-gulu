---
title:'sticky'
---


### 展示
<ClientOnly><use-sticky></use-sticky></ClientOnly>

### 可选参数


z-index 值默认为3,如有需要请自行更改/distance


### 示例
```
  <div style="display: flex; justify-content: center;">
    <div style="width: 600px; border: 1px solid black;">
      <p>段落1</p>
      <HotsSticky :distance="50">
        <div style="border: 1px solid red; background-color: #ccc; height: 60px background-size: cover;">
          <img src="https://i.loli.net/2018/11/24/5bf94b2047e33.png" alt="">
        </div>
      </HotsSticky>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <p>段落10</p>
    </div>
  </div>
```
