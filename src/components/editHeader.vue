<template>
    <div class="main-edit-header">

      <el-dialog title="文章发布" v-model="pushFileVisible">
        <el-form :model="push">
          <el-form-item label="选择网站" :label-width="formLabelWidth">
            <el-select v-model="push.site" placeholder="请选择网站">
              <el-option label="csdn" value="csdn"></el-option>
              <el-option label="github" value="github"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="pushFileVisible = false">取 消</el-button>
          <el-button type="primary" @click="publish">确 定</el-button>
        </div>
      </el-dialog>


      <el-menu  class="setting-menu" mode="horizontal">

        <el-button-group class="operate-group">
          <el-button type="primary" icon="document">保存</el-button>
          <el-button type="primary" icon="share">分享</el-button>
          <el-button type="primary" @click="pushFileVisible = true"><i class="fa fa-external-link" ></i>&nbsp;发布</el-button>
        </el-button-group>

        <el-menu-item index="1" @click="goHome">回到主页</el-menu-item>
        <el-menu-item index="2">文章管理</el-menu-item>
        <el-menu-item index="3">编辑设置</el-menu-item>

      </el-menu>

    </div>
</template>
<script>

export default{
  name: 'editHeader',
  data(){
      return{
        push : {
          site : '',
        },
        pushFileVisible : false,
        formLabelWidth: '120px'
      }
  },
  methods : {
    goHome : function(){
      this.$router.push('home')
    },
    publish : function (){
      if(this.push.site == "" || this.push.site == null){
        alert(请选择网站)
      }else{
        this.pushFileVisible = false
        alert("成功发布到" + this.push.site)
      }

    }
  }
}
</script>
<style lang="scss">
  .main-edit-header{
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
