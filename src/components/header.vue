<template>
  <div class="main-all-header">
    <el-menu  class="link-menu" mode="horizontal">
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">消息</el-menu-item>
    </el-menu>

    <el-menu class="click-menu" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-menu-item index="2-1">多媒体中心</el-menu-item>
        <el-menu-item index="2-2">文章管理</el-menu-item>
        <el-menu-item index="2-3">系统设置</el-menu-item>
      </el-submenu>
      <el-button type="primary" @click="write">写文章</el-button>
    </el-menu>
  </div>
</template>

<script>

  export default{
    name : "header",
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{

    }
    ,
    methods: {
      write : function(){
        this.$router.push('edit')
      }
    }
  }
</script>

<style lang="scss">
  .main-all-header{
    box-shadow:0px 0px 15px #f00;
    height: 100%;
    .link-menu{
      padding-left: 15%;
    }
    .click-menu{
      float: right;
      height: 100%;
      padding-right: 6%;
      .el-submenu{
        template{
          padding-right: 10%;
        }
      }
      .el-button{
        margin-top: 5%;
      }
    }
  }
  .el-menu:after, .el-menu:before{
    display: none !important;
  }
</style>
