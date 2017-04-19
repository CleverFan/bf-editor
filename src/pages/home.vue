<template>
  <div class="home">
    <div class="home-header">
      <main-header/>
    </div>
    <hr>
    <div class="main-div">
      <el-row :gutter="1">
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-col :span="12"><directory-view></directory-view></el-col>
          <el-col :span="12"><file-view></file-view></el-col>
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple">
          <markdown-editor></markdown-editor>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import Markdown from '../components/markdown'
import Directory from '../components/directory'
import File from '../components/file'
export default{
  name : 'home',
  data(){
    return{

    }
  },
  components:{
     'main-header': Header,
     'markdown-editor': Markdown,
     'directory-view': Directory,
     'file-view' : File
  },
  computed : {

  }
}
</script>
<style lang="scss">
  .home{
    height:100%;
    min-height: 100%;
    .home-header{
      height: 10%;
      padding-right: 1%;
    }
    .main-div{
      height: 90%;
      .el-row {
        height:100%;
        min-height: 100%;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
          border-radius: 4px;
          height:100%;
          min-height: 100%;
        }
      }
    }
  }


  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height:100%;
    min-height: 100%;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
