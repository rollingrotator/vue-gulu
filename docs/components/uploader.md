---
title:'uploader'
---


### 展示
<ClientOnly><use-uploader></use-uploader></ClientOnly>



### 示例
```
   <template>
     <div style="margin: 20px;">
       <div>只能上传 300kb 以内的 png、jpeg 文件</div>
        <HotsUploader accept="image/*" method="POST"
            action="https://uploader-server.herokuapp.com/upload" name="file"
            :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
            <HotsButton icon="ow">上传</HotsButton>
        </HotsUploader>
     </div>
   </template>
   
   data() {
     return {
       fileList: []
     }
   },
   methods: {
     parseResponse(response) {
       let url = `https://uploader-server.herokuapp.com/preview/${response}`
       return url
     },
     yyy(data) {
       console.log(data)
     },
   }

