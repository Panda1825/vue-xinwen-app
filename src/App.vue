<template>
        <keep-alive :include="cachePages" >
       <router-view />
    </keep-alive>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name: 'App',
    components: {

    },
    computed:{
      ...mapState(['cachePages'])
    }
  }
</script>

<style>

</style>
