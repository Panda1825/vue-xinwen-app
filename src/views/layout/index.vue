<template>
<div>
<router-view></router-view>
  <van-tabbar route   class="tabbar">
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="bulb-o" to="/weather">天气</van-tabbar-item>
  <van-tabbar-item icon="calendar-o" to="/todolist">计划</van-tabbar-item>
  <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
 export default {
        name: 'layout',
        mounted(){
            this.$store.commit('ADDCACHEPAGE','layout');
        }
    }
</script>

<style scoped lang="less">
.tabbar{
    /deep/ .iconfont{
        font-size: 12px !important;
    }
}


</style>