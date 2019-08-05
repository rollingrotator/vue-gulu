<template>
  <div style="margin: 20px;">
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <HotsUploader accept="image/*" method="POST" action="https://uploader-server.herokuapp.com/upload" name="file"
                  :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">
      <HotsButton icon="ow">上传</HotsButton>
    </HotsUploader>
  </div>
</template>

<script>
  import HotsUploader from '../../../src/uploader'
  import HotsButton from '../../../src/button/button'

  export default {
    name: "use-tabs",
    components: {
      HotsUploader, HotsButton
    },
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
        console.log('yyy')
        console.log(data)
      },
    }
  }
</script>

<style scoped>
  .container {
    border: 1px solid deepskyblue;
  }
</style>