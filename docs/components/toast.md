---
title:'toast'
---


### 展示
<ClientOnly><use-toast></use-toast></ClientOnly>

### 可选参数






### 示例
```
   <div>
     <button @click="showToast1">top</button>
     <button @click="showToast2">middle</button>
     <button @click="showToast3">bottom</button>
   </div>
   
   
    showToast(position){
       this.$toast(`恭喜你,中了\$ ${parseInt(Math.random() * 12345)}元！`, {
         position,
         enableHtml: false,
         closeButton: {
           text: '关闭',
           callback () {
             console.log('调用了')
           }
         },
         autoClose: 3,
       })
     }
```
