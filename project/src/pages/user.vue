<template>
  <div>
    <logo></logo>
    <!-- 顶部导航条 -->
    <!-- <top></top> -->
    <logo></logo>
    <!-- 侧边栏 -->
    <sideBar/>
    <!-- 路由切换展示视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from '../components/user/sideBar'
import basicShow from './basicShow'
import updatePassword from './updatePassword'
import soldOut from './soldOut'
import orderHistroy from './orderHistroy'
import logo from '../components/index/logo'
  export default {
    name:'User',
    components:{sideBar,basicShow,updatePassword,soldOut,orderHistroy,logo},
  }
</script>

<style>

</style>