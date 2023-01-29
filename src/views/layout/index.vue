<template>
<div>
<router-view></router-view>
  <van-tabbar route>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="bulb-o" to="/weather">天气</van-tabbar-item>
  <van-tabbar-item icon="calendar-o" to="/todolist">计划</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>