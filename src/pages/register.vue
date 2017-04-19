<template>
    <div class="register">
      <el-form ref="register" :model="newUser" label-width="80px">
        用户名： <el-input v-model="newUser.name" placeholder="请输入用户名"></el-input>
        密  码： <el-input v-model="newUser.password" placeholder="请输入密码"></el-input>
        确认密码： <el-input v-model="newUser.rePassword" placeholder="请再次输入密码"></el-input>
        github地址；
        <div>
          <el-input placeholder="请输入GitHub用户名" v-model="newUser.github">
            <template slot="prepend">https://github.com/</template>
          </el-input>
        </div>
        <el-button type="primary" v-on:click="register">确认</el-button>
      </el-form>
    </div>
</template>
<script>
export default{
  name : 'register',
  data(){
      return{

      }
  },
  computed: {
    newUser () {
      return this.$store.state.newUser
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register')
    }
  }
}
</script>

<style  lang="scss">
.register {
  width:300px;
  height:200px;
  position:absolute;
  left:50%;
  top:50%;
  margin:-100px 0 0 -150px

}
</style>
