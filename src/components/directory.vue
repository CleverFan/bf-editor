<template>
  <div class="main-directory">
    <el-popover
      ref="popover5"
      placement="top"
      width="160"
      v-model="addVisible">
      <el-input v-model="addDirectoryName" placeholder="请输入文件夹名"></el-input>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelAdd">取消</el-button>
        <el-button type="primary" size="mini" @click="addDirectory">确定</el-button>
      </div>
    </el-popover>

    <el-menu mode="vertical" class = "new-menu" default-active="1">
      <el-menu-item index="1" v-popover:popover5><i class="el-icon-plus"></i>新建文集</el-menu-item>
    </el-menu>

    <el-menu class = "list-menu" default-active="1">
      <el-menu-item v-for="dir in dirList" :key="dir.id"  :index="dir.id" @click="changeDir(dir.id)">
        {{dir.name}} {{dir.time}}
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default{
    name: 'directory',
    data(){
      return{
          addVisible: false,
          addDirectoryName : '',
      }
    },
    computed : {
      dirList : function(){
        return this.$store.state.dirList
      }
    },
    methods: {
      cancelAdd : function(){
        this.addVisible = false;
      },
      addDirectory : function (){
        if(this.addDirectoryName == null || this.addDirectoryName == ''){
          alert("请输入名字");
        }else{
          // 判断是否重复
          // 添加
          this.$store.dispatch('addDir', this.addDirectoryName)
          this.addVisible = false
          this.addDirectoryName = ''
        }

      },
      changeDir : function(index){
        this.$store.dispatch('changeNowDir', index)
      }
    }
  }
</script>

<style lang="scss">
  .main-directory{
    height: 100%;
    box-sizing: border-box ;
    .new-menu{
      height: 9%;
    }
    .list-menu{
      height: 91%;
    }
  }
</style>
