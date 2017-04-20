<template>
  <div class="home">
     <div class="home-header">
       <all-header></all-header>
     </div>
    <div class="homeContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  export default{
      data(){
          return{
              msg:'hello vue'
          }
      },
      components:{
          'all-header' : Header,
      }
  }
</script>

<style lang="scss">
  .home{
    height: 100%;
    .home-header{
      height: 9%;
    }
  }

</style>
