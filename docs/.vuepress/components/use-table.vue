<template>
  <div>
    <div class="element">
      <div >
        <HotsTable :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"
                   @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
          <template slot-scope="xxx">
            <button @click="edit(xxx.item)">编辑</button>
            <button @click="view(xxx.item)">查看</button>
          </template>
        </HotsTable>
      </div>
  </div>
  </div>
</template>
<script>
  import HotsPages from '../../../src/pages'
  import HotsTable from  '../../../src/table'
  export default {
    name: "use-table",
    components: {HotsPages, HotsTable},
    data () {
      return {
        currentPage: 1,
        selected: [],
        columns: [
          {text: '姓名', field: 'name', width:200}, // 1
          {text: '分数', field: 'score',width:200},
        ],
        orderBy: { // true - 开启排序，但是不确定asc desc
          score: 'desc'
        },
        loading: false,
        dataSource: [
          {id: 1, name: '雨大', score: 100, description: 'xxxx xxxx'},
          {id: 2, name: '得到', score: 99, description: 'yyyy yyyy'},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
          {id: 9, name: '啊吖', score: 100},
          {id: 10, name: '预期', score: 99},
          {id: 11, name: '张三', score: 100},
          {id: 12, name: '李四', score: 99},
          {id: 13, name: '超人', score: 100},
          {id: 14, name: '蝙蝠侠', score: 99},
          {id: 15, name: '蜘蛛侠', score: 100},
          {id: 16, name: '呵呵', score: 99},
          {id: 17, name: '蜘蛛侠', score: 100},
          {id: 18, name: '钢铁侠', score: 99},
          {id: 19, name: '正则', score: 100},
          {id: 20, name: '宿舍', score: 99},
        ]
      }
    },
    methods: {
      edit (item) {
        alert(`开始编辑${item.id}`)
      },
      view (item) {
        alert(`开始查看${item.id}`)
      },
      x () {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      }
    }
  };
</script>
<style  lang="scss">
  .element::-webkit-scrollbar { width: 0 !important }  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>