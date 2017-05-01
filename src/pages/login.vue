<template>
    <div class="login">
      <el-form ref="user" :model="user" label-width="80px">
        用户名： <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
        密  码： <el-input v-model="user.password" placeholder="请输入密码"></el-input>

        <el-button type="primary" v-on:click="tryLogin">登录</el-button>
        <el-button type="primary" v-on:click="register">注册</el-button>
       </el-form>
    </div>
</template>

<script>
import * as types from '../vuex/type'
export default{
  name: 'login',
  data(){
      return{
        msg: '',
        token: '111'
      }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted(){
    this.$store.commit(types.TITLE, 'Login');
  },
  methods: {
    tryLogin () {
      if (this.token) {
        //this.$store.commit(types.LOGIN, this.token)
        this.$store.dispatch(types.LOGIN, this.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/home/' + this.$store.state.user.id);
        this.$router.push({
          path: redirect
        })
      }
    },
    register() {
      this.$router.push('register')
    }
  }
}


</script>

<style  lang="scss">
.login {
  width:300px;
  height:200px;
  position:absolute;
  left:50%;
  top:50%;
  margin:-100px 0 0 -150px

}


</style>
