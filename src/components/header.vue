<template>
  <div class="main-all-header">
    <el-menu  class="link-menu" mode="horizontal">
      <el-menu-item index="1" @click="go(5)">主页</el-menu-item>
      <el-menu-item index="2">消息</el-menu-item>
    </el-menu>

    <el-menu class="click-menu" mode="horizontal">
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-menu-item index="1-1" @click="go(1)">个人设置</el-menu-item>
        <el-menu-item index="1-2" @click="go(2)">多媒体中心</el-menu-item>
        <el-menu-item index="1-3" @click="go(3)">文章管理</el-menu-item>
        <el-menu-item index="1-4" @click="go(4)">系统设置</el-menu-item>
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
        this.$router.push('/edit/' + this.$store.state.user.id)
      },
      go : function(index){
        let router = this.$router
        switch(index){
          case 1:
            router.push('/home/' + this.$store.state.user.id + '/person')
            break;
          case 2:
            router.push('/home/' + this.$store.state.user.id + '/mediaManage')
          break;
          case 3:
            router.push('/home/' + this.$store.state.user.id + '/fileManage')
          break;
          case 4:
            router.push('/home/' + this.$store.state.user.id + '/sysManage')
          break;
          case 5:
            router.push('/home/' + this.$store.state.user.id)
          break;

        }
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
