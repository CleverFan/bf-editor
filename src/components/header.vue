<template>
    <div class="main-header">

      <el-menu  class="setting-menu" mode="horizontal">

        <el-button-group class="operate-group">
          <el-button type="primary" icon="document">保存</el-button>
          <el-button type="primary" icon="share">分享</el-button>
          <el-button type="primary" icon="delete">发布</el-button>
        </el-button-group>

        <el-submenu index="1">
          <template slot="title">个人中心</template>
          <el-menu-item index="1-1">媒体中心</el-menu-item>
          <el-menu-item index="1-2">个人信息</el-menu-item>
          <el-menu-item index="1-3">系统设置</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">文章管理</el-menu-item>
        <el-menu-item index="3">编辑设置</el-menu-item>

      </el-menu>

    </div>
</template>
<script>

export default{
  name: 'header',
  data(){
      return{

      }
  }
}
</script>
<style lang="scss">
  .main-header{
    box-shadow:0px 0px 15px #f00;
    .setting-menu{
      .operate-group{
        margin: 1%;
      }
      .el-menu-item, .el-submenu{
        float: right;
      }
    }
  }
</style>
