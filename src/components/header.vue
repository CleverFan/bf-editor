<template>
    <div class="main-header">
      <el-menu  class="warp-header" mode="horizontal">
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
    .warp-header{
      .el-menu-item, .el-submenu{
        float: right;
      }
    }
  }
</style>
