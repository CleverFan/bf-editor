<template>
  <div class="main-file">
    <el-popover
      ref="popover-file"
      placement="top"
      width="160"
      v-model="addVisible">
      <el-input v-model="addFileName" placeholder="请输入文章名"></el-input>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="cancelAdd">取消</el-button>
        <el-button type="primary" size="mini" @click="addFile">确定</el-button>
      </div>
    </el-popover>

    <el-menu mode="vertical" class = "new-file-menu" default-active="1">
      <el-menu-item index="1" v-popover:popover-file><i class="el-icon-plus"></i>新建文章</el-menu-item>
    </el-menu>
    <el-menu class="show-file-menu" default-active="1"  @select="onSelect">
      <el-menu-item v-for="file in files" :key="file.id" :index="file.id" v-if="file != null">
        {{file.title}} {{file.time}}
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        addFileName: '',
        addVisible: false,
      }
    },
    computed: {
      files : function (){
        return this.$store.state.fileList[this.$store.state.nowData.nowDir - 1].list
      },
      nowDir : function () {
        return this.$store.state.nowData.nowDir
      },
      nowFile : function(){
        return this.$store.state.nowData.nowFile
      }
    },
    methods: {
      cancelAdd : function(){
        this.addVisible = false;
      },
      addFile : function (){
        if(this.addFileName == null || this.addFileName == ''){
          alert("请输入名字");
        }else{
          // 判断是否重复
          // 添加
          this.$store.dispatch('addFile', this.addFileName)
          this.addVisible = false
          this.addDirectoryName = ''
        }

      },
      onSelect : function (index){
        //改变编辑器中的数据
        this.$store.commit('changeEditContentByFileIndex', index)
                console.log(this.$store.state.nowData.editData.mdValue)
      }
    }
  }
</script>

<style lang="scss">
  .main-file{
    height: 100%;
    .new-file-menu{
      height: 9%;
    }
    .show-file-menu{
      height: 91%;
    }
  }
</style>
